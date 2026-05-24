export type DemoInput = {
  role: string;
  email: string;
};

export type DemoResult =
  | { ok: true }
  | { ok: false; code: "missing_field" | "invalid_email" | "server_error"; message: string };

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitDemoRequest(input: DemoInput): Promise<DemoResult> {
  const role = input.role.replace(/\s+/g, " ").trim().slice(0, 80);
  const email = input.email.trim().slice(0, 254);

  if (!role) {
    return { ok: false, code: "missing_field", message: "Please pick a role." };
  }
  if (!isValidEmail(email)) {
    return { ok: false, code: "invalid_email", message: "Please enter a valid email." };
  }

  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  if (!endpoint || endpoint.includes("YOUR_FORM_ID")) {
    if (typeof window !== "undefined") {
      const subject = encodeURIComponent(`Husn demo request: ${role}`);
      const body = encodeURIComponent(`Role: ${role}\nEmail: ${email}`);
      window.location.href = `mailto:hello@husn.io?subject=${subject}&body=${body}`;
      return { ok: true };
    }
    return { ok: true };
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        role,
        email,
        _subject: `Husn demo request: ${role}`,
        _replyto: email,
      }),
    });

    if (!res.ok) {
      return {
        ok: false,
        code: "server_error",
        message: "Something went wrong. Please email hello@husn.io.",
      };
    }
    return { ok: true };
  } catch {
    return {
      ok: false,
      code: "server_error",
      message: "Something went wrong. Please email hello@husn.io.",
    };
  }
}
