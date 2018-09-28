# Load the Rails application.
require_relative 'application'
require 'json'
require 'rest-client'

# Initialize the Rails application.
Rails.application.initialize!

require_all 'app'
