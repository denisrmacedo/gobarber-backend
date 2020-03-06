export default {
  // host: 'smtp.mailtrap.io',
  // port: '2525',
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    // user: '27413d892acbf3',
    // pass: '4d43a34f270718',
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};

// Amazon SES
// Mailgun
// Sparkpost
// Mandril (Mailchip)
// Mailtrap (DEV)
