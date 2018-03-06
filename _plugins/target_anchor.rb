# _plugins/target_anchor.rb

#for post at http://blog.sojourner.co
require 'liquid'

# Returns a HTML achor tag with target="_blank"

module TargetAnchor 
  def open_in_new_window(input, url)
    return '<a href="' << url << '" target="_blank">' << input << '</a>'
  end
end

Liquid::Template.register_filter(TargetAnchor)