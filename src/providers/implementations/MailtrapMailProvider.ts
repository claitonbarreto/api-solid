import Mail from "nodemailer/lib/mailer";
import nodemailer from "nodemailer";
import { IMailerProvider, IMessage } from "../IMailerProvider";

export class MailtrapMailProvider implements IMailerProvider {
    
    private transporter: Mail

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "10e9cf89906270",
                pass: "9b23be335a6024"
            }
        })
    }
    
    async sendMail(message: IMessage): Promise<void> {

        await this.transporter.sendMail({
            from: {
                name: message.from.name,
                address: message.from.email
            },
            to: {
                name: message.to.name,
                address: message.to.email
            },
            subject: message.subject,
            html: message.body
        })
    }

    async sendWelcomeEmail(user: { name: string; email: string; }): Promise<void> {
        await this.sendMail({
            from: {
                name: 'Equipe do meu app',
                email: 'mail@meuapp.com.br',
            },
            to: {
                name: user.name,
                email: user.email,
            },
            subject: 'Seja bem-vindo ao app',
            body: '<p>Você já pode fazer login em nossa plataforma</p>'
        })
    }
}