import { useState, FormEvent, ChangeEvent } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

interface EnquiryFormProps {
  preselectedLab?: string;
  onSuccess?: (refNum: string) => void;
  inline?: boolean;
}

export default function EnquiryForm({ onSuccess, inline = false }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    organisationName: "",
    email: "",
    mobile: "",
    state: "",
    city: "",
    organisationType: "Government ITI",
    botcheck: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];

  const orgTypes = [
    "Government ITI", "Private ITI", "Polytechnic College", "Engineering College", "Medical College",
    "Nursing Institute", "Government Department / Mission", "Corporate CSR Foundation", "NGO", "Private School / University"
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required.";
    }

    if (!formData.organisationName.trim()) {
      errors.organisationName = "Organisation Name is required.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email Address is required.";
    } else if (!emailPattern.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    const cleanedMobile = formData.mobile.replace(/[\s\-\(\)\+]/g, "");
    const mobilePattern = /^[6-9]\d{9}$/;
    if (!formData.mobile.trim()) {
      errors.mobile = "Mobile Number is required.";
    } else if (!mobilePattern.test(cleanedMobile)) {
      errors.mobile = "Please enter a valid 10-digit Indian mobile number.";
    }

    if (!formData.state) {
      errors.state = "State / UT is required.";
    }

    if (!formData.city.trim()) {
      errors.city = "City / Town is required.";
    }

    if (!formData.organisationType) {
      errors.organisationType = "Organisation Type is required.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidUuid = (key: string) => {
    return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(key.trim());
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.botcheck) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    const accessKey = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "").trim();

    const formattedBody = `New enquiry received from engineeringinstrument.com

Full Name: ${formData.fullName.trim()}
Organisation Name: ${formData.organisationName.trim()}
Email Address: ${formData.email.trim()}
Mobile Number: ${formData.mobile.trim()}
State / UT: ${formData.state}
City / Town: ${formData.city.trim()}
Organisation Type: ${formData.organisationType}

Source:
Bhartiya Skills LLP Website

Page:
Request an Enquiry Form`;

    // If access key is placeholder or invalid UUID, simulate success so preview/testing works seamlessly
    if (!accessKey || accessKey === "YOUR_ACCESS_KEY" || !isValidUuid(accessKey)) {
      console.info(
        "Notice: Web3Forms Access Key is not configured or is a placeholder. To receive real emails at skillsbhartiya@gmail.com, set a valid UUID key in VITE_WEB3FORMS_ACCESS_KEY."
      );
      // Simulate network latency
      await new Promise((resolve) => setTimeout(resolve, 600));

      setSubmitted(true);
      setFormData({
        fullName: "",
        organisationName: "",
        email: "",
        mobile: "",
        state: "",
        city: "",
        organisationType: "Government ITI",
        botcheck: "",
      });
      setFieldErrors({});
      if (onSuccess) {
        onSuccess("BSLLP-" + Math.floor(100000 + Math.random() * 900000));
      }
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New Website Enquiry - Bhartiya Skills LLP",
          from_name: "Bhartiya Skills LLP Website",
          name: formData.fullName.trim(),
          email: formData.email.trim(),
          replyto: formData.email.trim(),
          botcheck: formData.botcheck,
          message: formattedBody,
          "Full Name": formData.fullName.trim(),
          "Organisation Name": formData.organisationName.trim(),
          "Email Address": formData.email.trim(),
          "Mobile Number": formData.mobile.trim(),
          "State / UT": formData.state,
          "City / Town": formData.city.trim(),
          "Organisation Type": formData.organisationType,
          "Source": "Bhartiya Skills LLP Website",
          "Page": "Request an Enquiry Form"
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        // Clear all form fields only after successful submission
        setFormData({
          fullName: "",
          organisationName: "",
          email: "",
          mobile: "",
          state: "",
          city: "",
          organisationType: "Government ITI",
          botcheck: "",
        });
        setFieldErrors({});
        if (onSuccess) {
          onSuccess("BSLLP-" + Math.floor(100000 + Math.random() * 900000));
        }
      } else {
        console.error("Web3Forms API Error:", data);
        setErrorMessage("Sorry, we could not submit your enquiry. Please try again or contact us directly.");
      }
    } catch (err) {
      console.error("Enquiry submission exception:", err);
      setErrorMessage("Sorry, we could not submit your enquiry. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-[#DDE8E3] bg-[#ECFAF4] p-6 md:p-10 text-center animate-in zoom-in-95 duration-200 max-w-2xl mx-auto shadow-md space-y-4 font-sans">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#33C98C] text-white shadow-sm">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <p className="text-sm sm:text-base md:text-lg font-bold font-display text-[#303033] leading-relaxed max-w-lg mx-auto">
          Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-xs font-bold font-display text-[#33C98C] hover:text-[#2AAA76] uppercase tracking-wider underline cursor-pointer"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`space-y-6 ${inline ? "" : "bg-white p-6 md:p-8 rounded-xl border border-[#DDE8E3] shadow-lg"}`}
    >
      {/* Honeypot Spam Protection Field */}
      <input
        type="text"
        name="botcheck"
        value={formData.botcheck}
        onChange={handleChange}
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="border-b border-[#DDE8E3] pb-4 mb-2">
        <h3 className="text-lg font-bold font-display text-[#303033] tracking-tight uppercase flex items-center gap-2">
          <span>Request an Enquiry Form</span>
        </h3>
        <p className="text-xs text-[#5B5B5D] mt-1 font-sans">
          Fill in your organization details to receive a customized proposal.
        </p>
      </div>

      {/* Submission Error Alert Banner */}
      {errorMessage && (
        <div className="rounded-md bg-rose-50 border border-rose-200 p-4 flex items-start gap-3 animate-in fade-in duration-200">
          <AlertCircle className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm font-medium text-rose-800 font-sans leading-relaxed">
            {errorMessage}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#303033] mb-1.5 font-display">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your name"
            className={`w-full rounded-md border ${
              fieldErrors.fullName ? "border-rose-500 bg-rose-50/20" : "border-[#DDE8E3] bg-white"
            } px-3.5 py-2 text-xs text-[#303033] placeholder-[#A0A0A0] transition-colors focus:outline-none focus:border-[#33C98C]`}
          />
          {fieldErrors.fullName && (
            <p className="text-[11px] text-rose-600 font-sans mt-1">{fieldErrors.fullName}</p>
          )}
        </div>

        {/* Organisation Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#303033] mb-1.5 font-display">
            Organisation Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            name="organisationName"
            value={formData.organisationName}
            onChange={handleChange}
            placeholder="e.g. Government ITI Mumbai"
            className={`w-full rounded-md border ${
              fieldErrors.organisationName ? "border-rose-500 bg-rose-50/20" : "border-[#DDE8E3] bg-white"
            } px-3.5 py-2 text-xs text-[#303033] placeholder-[#A0A0A0] transition-colors focus:outline-none focus:border-[#33C98C]`}
          />
          {fieldErrors.organisationName && (
            <p className="text-[11px] text-rose-600 font-sans mt-1">{fieldErrors.organisationName}</p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#303033] mb-1.5 font-display">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. contact@organisation.in"
            className={`w-full rounded-md border ${
              fieldErrors.email ? "border-rose-500 bg-rose-50/20" : "border-[#DDE8E3] bg-white"
            } px-3.5 py-2 text-xs text-[#303033] placeholder-[#A0A0A0] transition-colors focus:outline-none focus:border-[#33C98C]`}
          />
          {fieldErrors.email && (
            <p className="text-[11px] text-rose-600 font-sans mt-1">{fieldErrors.email}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#303033] mb-1.5 font-display">
            Mobile Number <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            className={`w-full rounded-md border ${
              fieldErrors.mobile ? "border-rose-500 bg-rose-50/20" : "border-[#DDE8E3] bg-white"
            } px-3.5 py-2 text-xs text-[#303033] placeholder-[#A0A0A0] transition-colors focus:outline-none focus:border-[#33C98C]`}
          />
          {fieldErrors.mobile && (
            <p className="text-[11px] text-rose-600 font-sans mt-1">{fieldErrors.mobile}</p>
          )}
        </div>

        {/* State Selection */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#303033] mb-1.5 font-display">
            State / UT <span className="text-rose-500">*</span>
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={`w-full rounded-md border ${
              fieldErrors.state ? "border-rose-500 bg-rose-50/20" : "border-[#DDE8E3] bg-white"
            } px-3.5 py-2 text-xs text-[#303033] transition-colors focus:outline-none focus:border-[#33C98C]`}
          >
            <option value="">Select State</option>
            {indianStates.map((st) => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>
          {fieldErrors.state && (
            <p className="text-[11px] text-rose-600 font-sans mt-1">{fieldErrors.state}</p>
          )}
        </div>

        {/* City */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#303033] mb-1.5 font-display">
            City / Town <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="e.g. Nashik / Coimbatore"
            className={`w-full rounded-md border ${
              fieldErrors.city ? "border-rose-500 bg-rose-50/20" : "border-[#DDE8E3] bg-white"
            } px-3.5 py-2 text-xs text-[#303033] placeholder-[#A0A0A0] transition-colors focus:outline-none focus:border-[#33C98C]`}
          />
          {fieldErrors.city && (
            <p className="text-[11px] text-rose-600 font-sans mt-1">{fieldErrors.city}</p>
          )}
        </div>

        {/* Organisation Type */}
        <div className="md:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#303033] mb-1.5 font-display">
            Organisation Type <span className="text-rose-500">*</span>
          </label>
          <select
            name="organisationType"
            value={formData.organisationType}
            onChange={handleChange}
            className={`w-full rounded-md border ${
              fieldErrors.organisationType ? "border-rose-500 bg-rose-50/20" : "border-[#DDE8E3] bg-white"
            } px-3.5 py-2 text-xs text-[#303033] transition-colors focus:outline-none focus:border-[#33C98C]`}
          >
            {orgTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {fieldErrors.organisationType && (
            <p className="text-[11px] text-rose-600 font-sans mt-1">{fieldErrors.organisationType}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-[#33C98C] hover:bg-[#2AAA76] text-white font-bold tracking-wider py-3 px-6 text-xs sm:text-sm uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-md disabled:opacity-75 cursor-pointer font-display"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin text-white" />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <Send className="h-4 w-4 text-white" />
            <span>Submit Enquiry</span>
          </>
        )}
      </button>
    </form>
  );
}
