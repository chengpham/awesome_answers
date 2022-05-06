ActionMailer::Base.smtp_settings = {
    address: "smtp.gmail.com",
    port: 587,
    enable_starttls_auto: true,
    authentication: :plain,
    user_name: ENV["EMAIL_USERNAME"],
    password: ENV["EMAIL_PASSWORD"],
    domain: "smtp.gmail.com",
    openssl_verify_mode: "none"

}