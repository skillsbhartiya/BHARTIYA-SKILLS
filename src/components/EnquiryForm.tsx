import { useState, FormEvent, ChangeEvent } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

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
    isGovernmentProject: "yes",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        if (onSuccess) {
          onSuccess(data.referenceNumber);
        }
      }
    } catch (err) {
      console.error(err);
      alert("Submission error. Please check your connectivity.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-[#DDE8E3] bg-[#ECFAF4] p-6 md:p-10 text-center animate-in zoom-in-95 duration-200 max-w-2xl mx-auto shadow-md">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#33C98C] text-white mb-4 shadow-sm">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <p className="text-sm sm:text-base md:text-lg font-bold font-display text-[#303033] leading-relaxed max-w-lg mx-auto">
          Thank you for trusting Bhartiya Skills LLP. Your request has been registered and our team connect shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-6 ${inline ? "" : "bg-white p-6 md:p-8 rounded-xl border border-[#DDE8E3] shadow-lg"}`}
    >
      <div className="border-b border-[#DDE8E3] pb-4 mb-2">
        <h3 className="text-lg font-bold font-display text-[#303033] tracking-tight uppercase flex items-center gap-2">
          <span>Request an Enquiry Form</span>
        </h3>
        <p className="text-xs text-[#5B5B5D] mt-1 font-sans">
          Fill in your organization details to receive a customized proposal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#303033] mb-1.5 font-display">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full rounded-md border border-[#DDE8E3] bg-white px-3.5 py-2 text-xs text-[#303033] placeholder-[#A0A0A0]"
          />
        </div>

        {/* Organisation Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#303033] mb-1.5 font-display">
            Organisation Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            name="organisationName"
            required
            value={formData.organisationName}
            onChange={handleChange}
            placeholder="e.g. Government ITI Mumbai"
            className="w-full rounded-md border border-[#DDE8E3] bg-white px-3.5 py-2 text-xs text-[#303033] placeholder-[#A0A0A0]"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#303033] mb-1.5 font-display">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. contact@organisation.in"
            className="w-full rounded-md border border-[#DDE8E3] bg-white px-3.5 py-2 text-xs text-[#303033] placeholder-[#A0A0A0]"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#303033] mb-1.5 font-display">
            Mobile Number <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            name="mobile"
            required
            value={formData.mobile}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            className="w-full rounded-md border border-[#DDE8E3] bg-white px-3.5 py-2 text-xs text-[#303033] placeholder-[#A0A0A0]"
          />
        </div>

        {/* State Selection */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#303033] mb-1.5 font-display">
            State / UT <span className="text-rose-500">*</span>
          </label>
          <select
            name="state"
            required
            value={formData.state}
            onChange={handleChange}
            className="w-full rounded-md border border-[#DDE8E3] bg-white px-3.5 py-2 text-xs text-[#303033]"
          >
            <option value="">Select State</option>
            {indianStates.map((st) => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#303033] mb-1.5 font-display">
            City / Town <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            placeholder="e.g. Nashik / Coimbatore"
            className="w-full rounded-md border border-[#DDE8E3] bg-white px-3.5 py-2 text-xs text-[#303033] placeholder-[#A0A0A0]"
          />
        </div>

        {/* Organisation Type */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#303033] mb-1.5 font-display">
            Organisation Type <span className="text-rose-500">*</span>
          </label>
          <select
            name="organisationType"
            value={formData.organisationType}
            onChange={handleChange}
            className="w-full rounded-md border border-[#DDE8E3] bg-white px-3.5 py-2 text-xs text-[#303033]"
          >
            {orgTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
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
            <span>Submitting Request...</span>
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
