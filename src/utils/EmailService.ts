import {Resend} from "resend";

export class EmailService {
    private resend: Resend;

    constructor() {
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            throw new Error("RESEND_API_KEY environment variable is required");
        }

        console.log("Initializing Resend with API key length:", apiKey.length);
        this.resend = new Resend(apiKey);
    }

    async sendVerificationEmail(email: string, token: string): Promise<void> {
        const verificationUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/verify?token=${token}`;

        try {
            console.log(`Sending verification email to: ${email}`);

            const result = await this.resend.emails.send({
                // Use Resend's test domain or your verified domain
                from: "onboarding@resend.dev", // Resend's test domain
                // from: "noreply@yourdomain.com", // Use this when you have a verified domain
                to: email,
                subject: "Email Verification",
                html: `
                  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2>Welcome to PenguinAPI!</h2>
                    <p>Please click the button below to verify your email address:</p>
                    <a href="${verificationUrl}" 
                       style="background-color: #007cff; color: white; padding: 12px 24px; 
                              text-decoration: none; border-radius: 5px; display: inline-block;">
                      Verify Email
                    </a>
                    <p>Or copy and paste this link in your browser:</p>
                    <p><a href="${verificationUrl}">${verificationUrl}</a></p>
                    <p>This link will expire in 24 hours.</p>
                  </div>
                `,
            });

            console.log("Verification email sent successfully:", result);

        } catch (error: any) {
            console.error("Failed to send verification email:", error);
            console.error("Error details:", error.response?.data || error.message);
            throw new Error(`Failed to send verification email: ${error.message}`);
        }
    }

    async sendNewApiKey(email: string, apiKey: string): Promise<void> {
        try {
            const result = await this.resend.emails.send({
                from: "onboarding@resend.dev",
                to: email,
                subject: "🔑 Your New PenguinAPI Key",
                html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #007cff;">Your New API Key</h2>
                <p>You've generated a new API key for PenguinAPI. Keep it safe and secure:</p>

                <div style="background: #f8f9fa; border: 2px solid #e9ecef; padding: 20px; 
                            border-radius: 8px; margin: 20px 0;">
                  <p style="margin: 0; font-family: monospace; font-size: 14px; 
                            word-break: break-all; background: white; padding: 10px; 
                            border-radius: 4px;">
                    <strong>${apiKey}</strong>
                  </p>
                </div>

                <p><strong>⚠️ Important:</strong> Treat this key like a password. Don’t share it or commit it to Git.</p>

                <h3 style="margin-top: 30px; color: #343a40;">Quick Test</h3>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 4px; 
                            border-left: 4px solid #007cff;">
                  <code style="font-family: monospace; font-size: 12px; display: block;">
                    curl -H "x-api-key: ${apiKey}" \\<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp; https://api.penguinapi.com/v1/facts
                  </code>
                </div>

                <p style="margin-top: 30px;">
                  Need help? Visit our 
                  <a href="https://docs.penguinapi.com" style="color: #007cff;">docs</a> 
                  or contact support.
                </p>

                <p style="margin-top: 30px;">
                  Stay curious,<br/>
                  <strong>The PenguinAPI Team 🐧</strong>
                </p>
              </div>
            `,
            });

        } catch (error: any) {
            console.error("Failed to send new key:", error);
            console.error("Error details:", error.response?.data || error.message);
            throw new Error(`Failed to send new key: ${error.message}`);
        }
    }


    async sendWelcomeEmail(email: string, apiKey: string): Promise<void> {
        try {
            const result = await this.resend.emails.send({
                // Use Resend's test domain or your verified domain
                from: "onboarding@resend.dev", // Resend's test domain
                // from: "noreply@yourdomain.com", // Use this when you have a verified domain
                to: email,
                subject: "🎉 Welcome to PenguinAPI – Your API Key Inside!",
                html: `
                  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #007cff;">Welcome to PenguinAPI!</h2>
                    <p>We're excited to have you onboard. Here's your personal API key:</p>

                    <div style="background: #f8f9fa; border: 2px solid #e9ecef; padding: 20px; 
                                border-radius: 8px; margin: 20px 0;">
                      <p style="margin: 0; font-family: monospace; font-size: 14px; 
                                word-break: break-all; background: white; padding: 10px; 
                                border-radius: 4px;">
                        <strong>${apiKey}</strong>
                      </p>
                    </div>

                    <p><strong>⚠️ Keep this key secret!</strong> Don't share it publicly or commit it to version control.</p>

                    <h3 style="margin-top: 30px; color: #343a40;">Your First Request 🚀</h3>
                    <div style="background: #f8f9fa; padding: 15px; border-radius: 4px; 
                                border-left: 4px solid #007cff;">
                      <code style="font-family: monospace; font-size: 12px; display: block;">
                        curl -H "x-api-key: ${apiKey}" \\<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp; https://api.penguinapi.com/v1/facts
                      </code>
                    </div>

                    <p style="margin-top: 30px;">
                      Need help? Check out our 
                      <a href="https://docs.penguinapi.com" style="color: #007cff;">documentation</a> 
                      or reply to this email.
                    </p>

                    <p style="margin-top: 30px;">
                      Happy hacking,<br/>
                      <strong>The PenguinAPI Team 🐧</strong>
                    </p>
                  </div>
                `,
            });

            console.log("Welcome email sent successfully:", result);

        } catch (error: any) {
            console.error("Failed to send welcome email:", error);
            console.error("Error details:", error.response?.data || error.message);
            throw new Error(`Failed to send welcome email: ${error.message}`);
        }
    }


}