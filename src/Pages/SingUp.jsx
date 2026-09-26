
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ArrowRight, Check, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SignUp = () => {
  const containerRef = useRef(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useGSAP(() => {
    gsap.from(".signup-left", {
      x: -60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".signup-form", {
      x: 60,
      opacity: 0,
      duration: 1,
      delay: 0.15,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Enter a valid name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian number";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must contain at least 8 characters";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = "Include at least one uppercase letter";
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = "Include at least one number";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.terms) {
      newErrors.terms = "You must accept the terms";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    // Backend/API call will go here
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const passwordRules = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    number: /[0-9]/.test(formData.password),
  };

  return (
    <section >
    <div
      ref={containerRef}
      className="min-h-screen bg-[#f7f6f3] flex items-center justify-center p-4 lg:p-8"
    >
      <div className="w-full max-w-7xl min-h-[720px] bg-white rounded-[2rem] overflow-hidden shadow-2xl grid lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="signup-left relative hidden lg:block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90"
            alt="Luxury Apartment"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 h-full flex flex-col justify-between p-10 xl:p-14 text-white">

            {/* Logo */}
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                Aptenza<span className="text-rose-400">.</span>
              </h1>

              <p className="mt-1 text-sm text-white/70">
                Premium Property Management
              </p>
            </div>

            {/* Main Text */}
            <div className="max-w-lg">
              <p className="uppercase tracking-[0.3em] text-xs text-white/60 mb-5">
                Live Better
              </p>

              <h2 className="text-5xl xl:text-6xl font-light leading-[1.05]">
                Find a place
                <br />
                <span className="italic font-serif">
                  worth calling home.
                </span>
              </h2>

              <p className="mt-6 text-white/75 max-w-md leading-relaxed">
                Discover thoughtfully managed homes, premium residences,
                and a rental experience designed around you.
              </p>
            </div>

            {/* Bottom */}
            <div className="flex items-center gap-3 text-sm text-white/60">
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              Trusted property management across India
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="signup-form flex items-center justify-center p-6 sm:p-10 lg:p-12 xl:p-16">

          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="lg:hidden mb-10">
              <h1 className="text-3xl font-semibold">
                Aptenza<span className="text-rose-500">.</span>
              </h1>
            </div>

            {!success ? (
              <>
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-[0.25em] text-rose-500 font-medium mb-3">
                    Welcome to Aptenza
                  </p>

                  <h2 className="text-4xl font-semibold tracking-tight text-neutral-900">
                    Create your account
                  </h2>

                  <p className="text-neutral-500 mt-3">
                    Start your journey to better living.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-800 mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`w-full h-12 px-4 rounded-xl border bg-neutral-50 outline-none transition
                      ${
                        errors.name
                          ? "border-red-400 focus:ring-2 focus:ring-red-100"
                          : "border-neutral-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
                      }`}
                    />

                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1.5">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-800 mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full h-12 px-4 rounded-xl border bg-neutral-50 outline-none transition
                      ${
                        errors.email
                          ? "border-red-400 focus:ring-2 focus:ring-red-100"
                          : "border-neutral-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
                      }`}
                    />

                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1.5">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-800 mb-2">
                      Phone Number
                    </label>

                    <div className="flex">
                      <span className="h-12 px-3 flex items-center bg-neutral-100 border border-r-0 border-neutral-200 rounded-l-xl text-sm text-neutral-600">
                        +91
                      </span>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                        placeholder="9876543210"
                        className={`w-full h-12 px-4 rounded-r-xl border bg-neutral-50 outline-none transition
                        ${
                          errors.phone
                            ? "border-red-400"
                            : "border-neutral-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
                        }`}
                      />
                    </div>

                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1.5">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-800 mb-2">
                      Password
                    </label>

                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a strong password"
                        className={`w-full h-12 px-4 pr-12 rounded-xl border bg-neutral-50 outline-none transition
                        ${
                          errors.password
                            ? "border-red-400"
                            : "border-neutral-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
                        }`}
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>

                    {/* Password Rules */}
                    {formData.password && (
                      <div className="mt-3 space-y-1.5">
                        <PasswordRule
                          valid={passwordRules.length}
                          text="At least 8 characters"
                        />

                        <PasswordRule
                          valid={passwordRules.uppercase}
                          text="One uppercase letter"
                        />

                        <PasswordRule
                          valid={passwordRules.number}
                          text="One number"
                        />
                      </div>
                    )}

                    {errors.password && (
                      <p className="text-xs text-red-500 mt-1.5">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-800 mb-2">
                      Confirm Password
                    </label>

                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        className={`w-full h-12 px-4 pr-12 rounded-xl border bg-neutral-50 outline-none transition
                        ${
                          errors.confirmPassword
                            ? "border-red-400"
                            : "border-neutral-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
                        }`}
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>

                    {errors.confirmPassword && (
                      <p className="text-xs text-red-500 mt-1.5">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>

                  {/* Terms */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        className="mt-1 accent-rose-500"
                      />

                      <span className="text-sm text-neutral-500 leading-relaxed">
                        I agree to Aptenza's{" "}
                        <Link
                          to="/terms"
                          className="text-neutral-900 underline underline-offset-2"
                        >
                          Terms & Conditions
                        </Link>{" "}
                        and{" "}
                        <Link
                          to="/privacy"
                          className="text-neutral-900 underline underline-offset-2"
                        >
                          Privacy Policy
                        </Link>
                        .
                      </span>
                    </label>

                    {errors.terms && (
                      <p className="text-xs text-red-500 mt-1.5">
                        {errors.terms}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-13 bg-neutral-900 hover:bg-rose-600 text-white rounded-xl flex items-center justify-center gap-3 font-medium transition-all duration-300 group disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Creating account...
                      </>
                    ) : (
                      <>
                        Create Account
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </>
                    )}
                  </button>

                  {/* Login */}
                  <p className="text-center text-sm text-neutral-500 pt-2">
                    Already have an account?{" "}
                    <Link
                      to="/signin"
                      className="text-neutral-900 font-medium hover:text-rose-600 transition"
                    >
                      Sign in
                    </Link>
                  </p>
                </form>
              </>
            ) : (
              /* SUCCESS */
              <div className="text-center py-10">

                <div className="mx-auto w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center">
                    <Check size={22} />
                  </div>
                </div>

                <h2 className="text-3xl font-semibold text-neutral-900">
                  Welcome to Aptenza
                </h2>

                <p className="text-neutral-500 mt-3 leading-relaxed">
                  Your account has been created successfully.
                  <br />
                  Let's find your perfect home.
                </p>

                <Link
                  to="/"
                  className="mt-8 inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-xl hover:bg-rose-600 transition"
                >
                  Explore Properties
                  <ArrowRight size={17} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

const PasswordRule = ({ valid, text }) => {
  return (
    <div className="flex items-center gap-2 text-xs">
      {valid ? (
        <Check size={14} className="text-green-500" />
      ) : (
        <X size={14} className="text-neutral-300" />
      )}

      <span className={valid ? "text-green-600" : "text-neutral-400"}>
        {text}
      </span>
    </div>
  );
};

export default SignUp;

