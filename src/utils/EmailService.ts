import {Resend} from "resend";

export class EmailService {
    private resend: Resend;
    private readonly fromEmail: string;
    private readonly backendUrl: string;

    constructor() {
        const apiKey = process.env.RESEND_API_KEY;
        const fromEmail = process.env.EMAIL
        const backendUrl = process.env.BACKEND_URL

        if (!apiKey) {
            throw new Error("RESEND_API_KEY environment variable is required");
        }

        if (!fromEmail) {
            throw new Error("EMAIL environment variable is required");
        }

        if (!backendUrl) {
            throw new Error("BACKEND_URL environment variable is required");
        }

        console.log("Initializing Resend with API key length:", apiKey.length);
        this.resend = new Resend(apiKey);
        this.fromEmail = fromEmail;
        this.backendUrl = backendUrl;
    }

    async sendVerificationEmail(email: string, token: string): Promise<void> {
        const verificationUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/verify?token=${token}`;
        try {
            console.log(`Sending verification email to: ${email}`);

            const result = await this.resend.emails.send({
                from: this.fromEmail,
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

    async sendPasswordResetEmail(email: string, firstName: string, token: string): Promise<void> {
        const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password?token=${token}`;
        try {
            const result = await this.resend.emails.send({
                from: this.fromEmail,
                to: email,
                subject: "🔐 Reset Your PenguinAPI Password",
                html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #007cff;">Password Reset Request</h2>
                <p>Hi ${firstName},</p>
                <p>We received a request to reset your PenguinAPI password. If you didn't make this request, you can safely ignore this email.</p>

                <div style="text-align: center; margin: 30px 0;">
                  <a href="${resetUrl}" 
                     style="background-color: #007cff; color: white; padding: 14px 28px; 
                            text-decoration: none; border-radius: 6px; display: inline-block; 
                            font-weight: bold;">
                    Reset Your Password
                  </a>
                </div>

                <p>Or copy and paste this link in your browser:</p>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 4px; 
                            border-left: 4px solid #007cff; margin: 15px 0;">
                  <code style="font-family: monospace; font-size: 12px; word-break: break-all;">
                    ${resetUrl}
                  </code>
                </div>

                <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; 
                            border-radius: 6px; margin: 20px 0;">
                  <p style="margin: 0; color: #856404;">
                    <strong>⏰ This link will expire in 1 hour</strong> for security reasons.
                  </p>
                </div>

                <p style="color: #666; font-size: 14px; margin-top: 30px;">
                  If you're having trouble clicking the button, copy and paste the URL above into your web browser.
                </p>

                <p style="margin-top: 30px;">
                  Stay secure,<br/>
                  <strong>The Boatmen team 🐧</strong>
                </p>

                <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
                <p style="color: #999; font-size: 12px; text-align: center;">
                  If you didn't request this password reset, please ignore this email or 
                  <a href="mailto:${this.fromEmail}" style="color: #007cff;">contact support</a> 
                  if you have concerns.
                </p>
              </div>
            `,
            });

            console.log("Password reset email sent successfully:", result);

        } catch (error: any) {
            console.error("Failed to send password reset email:", error);
            console.error("Error details:", error.response?.data || error.message);
            throw new Error(`Failed to send password reset email: ${error.message}`);
        }
    }

    async sendNewApiKey(email: string, apiKey: string): Promise<void> {
        try {
            const result = await this.resend.emails.send({
                from: this.fromEmail,
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
                    &nbsp;&nbsp;&nbsp;&nbsp; ${this.backendUrl}/api/v1/fact/?id=4
                  </code>
                </div>

                <p style="margin-top: 30px;">
                  Need help? Visit our 
                  <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}/docs" style="color: #007cff;">docs</a> 
                  or contact support.
                </p>

                <p style="margin-top: 30px;">
                  Stay curious,<br/>
                  <strong>The Boatmen Team 🐧</strong>
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
                from: this.fromEmail,
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
                        &nbsp;&nbsp;&nbsp;&nbsp; ${this.backendUrl}/api/v1/fact/random
                      </code>
                    </div>

                    <p style="margin-top: 30px;">
                      Need help? Check out our 
                      <a href="https://penguins.boatmans.org/docs" style="color: #007cff;">documentation</a> 
                      or reply to this email.
                    </p>

                    <p style="margin-top: 30px;">
                      Happy hacking,<br/>
                      <strong>The Boatmen Team 🐧</strong>
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