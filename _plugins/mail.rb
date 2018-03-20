config.action_mailer.delivery_method = :smtp
config.action_mailer.smtp_settings = {
  :authentication => :plain,
  :address => "smtp.mailgun.org",
  :port => 587,
  :domain => "donboulton.com",
  :user_name => "postmaster@donboulton.com",
  :password => "37dce4a13b337c47a571e99f30a5b3e7"
}