type IMailAddress = {
    name: string;
    email: string;
};

export interface IMessage {
    to: IMailAddress;
    from: IMailAddress;
    subject: string;
    body: string;
}

export interface IMailerProvider {
    sendMail(message: IMessage): Promise<void>;
    sendWelcomeEmail(user: IMailAddress): Promise<void>;
}