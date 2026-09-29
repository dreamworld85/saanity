import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface WelcomeEmailProps {
  name?: string;
  email?: string;
}

export function WelcomeEmail({
  name = "Developer",
  email = "developer@example.com",
}: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to your Next.js 16 + Sanity Stack</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>🚀 Welcome, {name}!</Heading>
          <Text style={paragraph}>
            Your Next.js 16 project is now fully configured with React 19, Tailwind CSS 4,
            Framer Motion, styled-components, and Sanity CMS.
          </Text>
          <Section style={btnContainer}>
            <Button
              style={button}
              href="https://nextjs.org/docs"
            >
              Explore Next.js Docs
            </Button>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            This transactional email was generated with React Email and dispatched via
            Nodemailer for {email}.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default WelcomeEmail;

const main: React.CSSProperties = {
  backgroundColor: "#0b0f19",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container: React.CSSProperties = {
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "560px",
  backgroundColor: "#111827",
  borderRadius: "12px",
  border: "1px solid #1f2937",
};

const heading: React.CSSProperties = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#f9fafb",
  padding: "17px 0 0",
};

const paragraph: React.CSSProperties = {
  margin: "0 0 15px",
  fontSize: "15px",
  lineHeight: "1.5",
  color: "#9ca3af",
};

const btnContainer: React.CSSProperties = {
  textAlign: "center",
  marginTop: "24px",
  marginBottom: "24px",
};

const button: React.CSSProperties = {
  backgroundColor: "#3b82f6",
  borderRadius: "8px",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center",
  display: "inline-block",
  padding: "12px 24px",
};

const hr: React.CSSProperties = {
  borderColor: "#1f2937",
  margin: "24px 0",
};

const footer: React.CSSProperties = {
  color: "#6b7280",
  fontSize: "12px",
  lineHeight: "1.4",
};
