# Counts bibliography entries by type and exposes them to Liquid as
# `site.pub_stats` so the publications page can show auto-updating stat cards.
#
#   site.pub_stats.total       -> all entries
#   site.pub_stats.article     -> @article (journal papers)
#   site.pub_stats.inproceedings -> @inproceedings (conference papers)
#   site.pub_stats.incollection  -> @incollection (book chapters)
#   site.pub_stats.first_year  -> earliest year found
#
# Numbers refresh on every build, so adding a paper to papers.bib updates them.

require "yaml"

Jekyll::Hooks.register :site, :after_init do |site|
  bib_path = File.join(site.source, "_bibliography", "papers.bib")
  stats = Hash.new(0)
  years = []

  if File.exist?(bib_path)
    content = File.read(bib_path, encoding: "UTF-8")

    content.scan(/^@(\w+)\s*\{/) do |m|
      type = m[0].downcase
      stats[type] += 1
      stats["total"] += 1
    end

    content.scan(/year\s*=\s*\{?\s*(\d{4})/i) do |m|
      years << m[0].to_i
    end
  end

  site.config["pub_stats"] = {
    "total"         => stats["total"],
    "article"       => stats["article"],
    "inproceedings" => stats["inproceedings"],
    "incollection"  => stats["incollection"],
    "first_year"    => years.min,
  }
end
