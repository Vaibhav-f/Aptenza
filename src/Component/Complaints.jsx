import React, { useState } from "react";
import {AlertCircle,ArrowRight,CheckCircle2,FileText,Home,Mail,Phone,Upload,User,} from "lucide-react";

const Complaint = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    apartment: "",
    category: "",
    priority: "Medium",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Complaint:", formData);

    
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f5f5f0] text-[#111] px-5 md:px-10 lg:px-16 py-28">
      <div className="max-w-7xl mx-auto">


        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>

            <p className="text-xs uppercase tracking-[0.3em] font-semibold">
              Resident Support
            </p>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[110px] leading-[0.85] tracking-[-0.06em] font-medium">
            Need
            <br />
            <span className="text-gray-400">help?</span>
          </h1>

          <p className="mt-10 max-w-2xl text-lg md:text-xl text-gray-500 leading-relaxed">
            Tell us what happened and our property management team will look
            into it. Submit a complaint and we'll make sure it reaches the
            right team.
          </p>
        </section>


        <section className="grid lg:grid-cols-[0.7fr_1.3fr] gap-8">


          <div className="bg-[#111] text-white rounded-[30px] p-8 md:p-10 h-fit lg:sticky lg:top-10">

            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-8">
              Aptenza Support
            </p>

            <h2 className="text-4xl md:text-5xl tracking-tight leading-tight">
              We're here to
              <br />
              help resolve it.
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Whether it's a maintenance issue, payment concern, security
              problem or something else, let us know.
            </p>

            <div className="mt-12 space-y-6">

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                  <AlertCircle size={19} />
                </div>

                <div>
                  <h3 className="font-medium">Report an issue</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Give us the details so we can understand the problem.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                  <FileText size={19} />
                </div>

                <div>
                  <h3 className="font-medium">Track your complaint</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Your complaint can be tracked using its reference ID.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                  <CheckCircle2 size={19} />
                </div>

                <div>
                  <h3 className="font-medium">Get it resolved</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    The appropriate team will review and handle the issue.
                  </p>
                </div>
              </div>

            </div>
          </div>

          

          <div className="bg-white rounded-[30px] p-7 md:p-10 border border-black/5">

            {submitted ? (
              <div className="min-h-[600px] flex flex-col items-center justify-center text-center">

                <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <CheckCircle2 size={40} />
                </div>

                <p className="uppercase tracking-[0.25em] text-xs text-gray-400 mt-8">
                  Complaint Submitted
                </p>

                <h2 className="text-4xl md:text-5xl tracking-tight mt-4">
                  We've received it.
                </h2>

                <p className="text-gray-500 max-w-md mt-5 leading-relaxed">
                  Your complaint has been submitted successfully. Our team
                  will review the issue and get back to you.
                </p>

                <div className="mt-8 px-6 py-4 rounded-2xl bg-gray-100">
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Reference ID
                  </p>

                  <p className="font-semibold mt-1">
                    APT-{Math.floor(Math.random() * 90000) + 10000}
                  </p>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide"
                >
                  Submit another complaint
                  <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                {/* FORM HEADER */}

                <div className="mb-10">
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                    Submit a complaint
                  </p>

                  <h2 className="text-4xl md:text-5xl tracking-tight mt-3">
                    Tell us what happened.
                  </h2>
                </div>

             

                <div className="mb-10">
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
                    Your details
                  </h3>

                  <div className="grid md:grid-cols-2 gap-5">

                    <div>
                      <label className="text-sm text-gray-500">
                        Full Name
                      </label>

                      <div className="relative mt-2">
                        <User
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full bg-[#f5f5f0] rounded-xl py-4 pl-11 pr-4 outline-none focus:ring-2 focus:ring-black/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-500">
                        Email Address
                      </label>

                      <div className="relative mt-2">
                        <Mail
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full bg-[#f5f5f0] rounded-xl py-4 pl-11 pr-4 outline-none focus:ring-2 focus:ring-black/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-500">
                        Phone Number
                      </label>

                      <div className="relative mt-2">
                        <Phone
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          required
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full bg-[#f5f5f0] rounded-xl py-4 pl-11 pr-4 outline-none focus:ring-2 focus:ring-black/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-500">
                        Apartment / Unit
                      </label>

                      <div className="relative mt-2">
                        <Home
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          required
                          type="text"
                          name="apartment"
                          value={formData.apartment}
                          onChange={handleChange}
                          placeholder="e.g. A-204"
                          className="w-full bg-[#f5f5f0] rounded-xl py-4 pl-11 pr-4 outline-none focus:ring-2 focus:ring-black/10"
                        />
                      </div>
                    </div>

                  </div>
                </div>

              

                <div className="mb-10">
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
                    Complaint details
                  </h3>

                  <div className="grid md:grid-cols-2 gap-5">

                    <div>
                      <label className="text-sm text-gray-500">
                        Complaint Category
                      </label>

                      <select
                        required
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full mt-2 bg-[#f5f5f0] rounded-xl py-4 px-4 outline-none"
                      >
                        <option value="">Select category</option>
                        <option value="maintenance">
                          Maintenance
                        </option>
                        <option value="plumbing">
                          Plumbing
                        </option>
                        <option value="electricity">
                          Electricity
                        </option>
                        <option value="security">
                          Security
                        </option>
                        <option value="cleaning">
                          Cleaning
                        </option>
                        <option value="parking">
                          Parking
                        </option>
                        <option value="payment">
                          Payment / Billing
                        </option>
                        <option value="other">
                          Other
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm text-gray-500">
                        Priority
                      </label>

                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        className="w-full mt-2 bg-[#f5f5f0] rounded-xl py-4 px-4 outline-none"
                      >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Urgent">Urgent</option>
                      </select>
                    </div>

                  </div>

                  <div className="mt-5">
                    <label className="text-sm text-gray-500">
                      Complaint Subject
                    </label>

                    <input
                      required
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Briefly describe the issue"
                      className="w-full mt-2 bg-[#f5f5f0] rounded-xl py-4 px-4 outline-none focus:ring-2 focus:ring-black/10"
                    />
                  </div>

                  <div className="mt-5">
                    <label className="text-sm text-gray-500">
                      Describe the issue
                    </label>

                    <textarea
                      required
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Please provide as much detail as possible..."
                      className="w-full mt-2 bg-[#f5f5f0] rounded-xl py-4 px-4 outline-none resize-none focus:ring-2 focus:ring-black/10"
                    />
                  </div>
                </div>

                {/* ATTACHMENT */}

                <div className="mb-10">
                  <label className="text-sm text-gray-500">
                    Attach Image / Document
                  </label>

                  <label className="mt-2 border-2 border-dashed border-gray-200 rounded-2xl p-7 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition">
                    <Upload
                      size={25}
                      className="text-gray-400"
                    />

                    <p className="mt-3 text-sm font-medium">
                      Upload supporting file
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                      PNG, JPG or PDF
                    </p>

                    <input
                      type="file"
                      className="hidden"
                      accept=".png,.jpg,.jpeg,.pdf"
                    />
                  </label>
                </div>

                

                <button
                  type="submit"
                  className="w-full bg-black text-white rounded-full py-5 flex items-center justify-center gap-3 uppercase text-sm font-semibold hover:bg-cyan-600 transition-colors duration-300"
                >
                  Submit Complaint
                  <ArrowRight size={18} />
                </button>

                <p className="text-xs text-gray-400 text-center mt-5">
                  By submitting this form, your complaint will be shared with
                  the Aptenza property management team.
                </p>

              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Complaint;