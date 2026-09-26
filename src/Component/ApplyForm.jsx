
import { useState } from "react";
import {
  CalendarDays,
  Clock3,
  User,
  Mail,
  Phone,
  Users,
  BriefcaseBusiness,
  IndianRupee,
  MessageSquare,
  Check,
  X,
} from "lucide-react";

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    occupants: "",
    occupation: "",
    income: "",
    moveInDate: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = [
    "10:00 AM",
    "12:00 PM",
    "02:00 PM",
    "04:00 PM",
    "06:00 PM",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Remove error while user is correcting field
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Date
    if (!formData.date) {
      newErrors.date = "Please select a visit date.";
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.date = "Visit date cannot be in the past.";
      }
    }

    // Time
    if (!formData.time) {
      newErrors.time = "Please select a time slot.";
    }

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Name can contain only letters.";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone =
        "Enter a valid 10-digit Indian mobile number.";
    }

    // Occupants
    if (!formData.occupants) {
      newErrors.occupants = "Please select number of occupants.";
    } else if (
      Number(formData.occupants) < 1 ||
      Number(formData.occupants) > 20
    ) {
      newErrors.occupants =
        "Occupants must be between 1 and 20.";
    }

    // Occupation
    if (!formData.occupation.trim()) {
      newErrors.occupation = "Occupation is required.";
    } else if (formData.occupation.trim().length < 2) {
      newErrors.occupation =
        "Please enter a valid occupation.";
    }

    // Income
    if (!formData.income) {
      newErrors.income = "Monthly income is required.";
    } else if (Number(formData.income) < 1000) {
      newErrors.income =
        "Please enter a valid monthly income.";
    }

    // Move-in date
    if (!formData.moveInDate) {
      newErrors.moveInDate =
        "Please select your preferred move-in date.";
    } else {
      const moveDate = new Date(formData.moveInDate);
      const visitDate = new Date(formData.date);

      if (
        formData.date &&
        moveDate < visitDate
      ) {
        newErrors.moveInDate =
          "Move-in date cannot be before the visit date.";
      }
    }

    // Message
    if (formData.message.length > 500) {
      newErrors.message =
        "Message cannot exceed 500 characters.";
    }

    // Terms
    if (!formData.terms) {
      newErrors.terms =
        "You must agree to the terms and conditions.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Form Data:", formData);

    setSubmitted(true);
  };

  // Today's date for min attribute
  const today = new Date().toISOString().split("T")[0];

  if (submitted) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-5">
        <div className="w-full max-w-lg rounded-3xl bg-white p-10 text-center shadow-xl">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <Check
              size={32}
              className="text-green-600"
            />
          </div>

          <h1 className="text-3xl font-bold text-neutral-900">
            Visit Scheduled
          </h1>

          <p className="mt-3 text-neutral-500">
            Your property visit has been scheduled successfully.
            We will contact you shortly to confirm your appointment.
          </p>

          <div className="mt-6 rounded-2xl bg-neutral-50 p-5 text-left">
            <p className="text-sm text-neutral-500">
              Date
            </p>

            <p className="font-semibold text-neutral-900">
              {formData.date}
            </p>

            <p className="mt-4 text-sm text-neutral-500">
              Time
            </p>

            <p className="font-semibold text-neutral-900">
              {formData.time}
            </p>
          </div>

          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                date: "",
                time: "",
                name: "",
                email: "",
                phone: "",
                occupants: "",
                occupation: "",
                income: "",
                moveInDate: "",
                message: "",
                terms: false,
              });
            }}
            className="mt-6 w-full rounded-full bg-black px-6 py-3 font-medium text-white transition hover:bg-neutral-800"
          >
            Schedule Another Visit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 px-5 py-16">

      <div className="mx-auto max-w-4xl">

        {/* HEADER */}

        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-neutral-500">
            Aptenza
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Schedule a Visit
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-neutral-500">
            Choose a convenient time and tell us a little
            about yourself.
          </p>
        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-3xl bg-white p-6 shadow-sm sm:p-10"
        >

          {/* VISIT DETAILS */}

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              Visit Details
            </h2>

            <p className="mt-1 text-sm text-neutral-500">
              Select when you would like to visit the property.
            </p>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">

            {/* DATE */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Visit Date
              </label>

              <div className="relative">
                <CalendarDays
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                />

                <input
                  type="date"
                  name="date"
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full rounded-xl border ${
                    errors.date
                      ? "border-red-500"
                      : "border-neutral-200"
                  } bg-white py-3 pl-11 pr-4 outline-none transition focus:border-black`}
                />
              </div>

              {errors.date && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.date}
                </p>
              )}
            </div>

            {/* TIME */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Preferred Time
              </label>

              <div className="relative">
                <Clock3
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                />

                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full appearance-none rounded-xl border ${
                    errors.time
                      ? "border-red-500"
                      : "border-neutral-200"
                  } bg-white py-3 pl-11 pr-4 outline-none transition focus:border-black`}
                >
                  <option value="">
                    Select time
                  </option>

                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {errors.time && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.time}
                </p>
              )}
            </div>
          </div>

          {/* DIVIDER */}

          <div className="my-10 h-px bg-neutral-100" />

          {/* PERSONAL INFORMATION */}

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              Personal Information
            </h2>

            <p className="mt-1 text-sm text-neutral-500">
              Please provide your contact and basic details.
            </p>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">

            {/* NAME */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Full Name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full rounded-xl border ${
                    errors.name
                      ? "border-red-500"
                      : "border-neutral-200"
                  } py-3 pl-11 pr-4 outline-none focus:border-black`}
                />
              </div>

              {errors.name && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* EMAIL */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full rounded-xl border ${
                    errors.email
                      ? "border-red-500"
                      : "border-neutral-200"
                  } py-3 pl-11 pr-4 outline-none focus:border-black`}
                />
              </div>

              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* PHONE */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Phone Number
              </label>

              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  className={`w-full rounded-xl border ${
                    errors.phone
                      ? "border-red-500"
                      : "border-neutral-200"
                  } py-3 pl-11 pr-4 outline-none focus:border-black`}
                />
              </div>

              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* OCCUPANTS */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Number of Occupants
              </label>

              <div className="relative">
                <Users
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                />

                <input
                  type="number"
                  name="occupants"
                  min="1"
                  max="20"
                  value={formData.occupants}
                  onChange={handleChange}
                  placeholder="e.g. 2"
                  className={`w-full rounded-xl border ${
                    errors.occupants
                      ? "border-red-500"
                      : "border-neutral-200"
                  } py-3 pl-11 pr-4 outline-none focus:border-black`}
                />
              </div>

              {errors.occupants && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.occupants}
                </p>
              )}
            </div>

            {/* OCCUPATION */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Occupation
              </label>

              <div className="relative">
                <BriefcaseBusiness
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                />

                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  placeholder="e.g. Software Developer"
                  className={`w-full rounded-xl border ${
                    errors.occupation
                      ? "border-red-500"
                      : "border-neutral-200"
                  } py-3 pl-11 pr-4 outline-none focus:border-black`}
                />
              </div>

              {errors.occupation && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.occupation}
                </p>
              )}
            </div>

            {/* INCOME */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Monthly Income
              </label>

              <div className="relative">
                <IndianRupee
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                />

                <input
                  type="number"
                  name="income"
                  min="1000"
                  value={formData.income}
                  onChange={handleChange}
                  placeholder="e.g. 50000"
                  className={`w-full rounded-xl border ${
                    errors.income
                      ? "border-red-500"
                      : "border-neutral-200"
                  } py-3 pl-11 pr-4 outline-none focus:border-black`}
                />
              </div>

              {errors.income && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.income}
                </p>
              )}
            </div>

            {/* MOVE IN DATE */}

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium">
                Preferred Move-in Date
              </label>

              <div className="relative">
                <CalendarDays
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                />

                <input
                  type="date"
                  name="moveInDate"
                  min={formData.date || today}
                  value={formData.moveInDate}
                  onChange={handleChange}
                  className={`w-full rounded-xl border ${
                    errors.moveInDate
                      ? "border-red-500"
                      : "border-neutral-200"
                  } py-3 pl-11 pr-4 outline-none focus:border-black`}
                />
              </div>

              {errors.moveInDate && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.moveInDate}
                </p>
              )}
            </div>

            {/* MESSAGE */}

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium">
                Message
                <span className="ml-1 text-neutral-400">
                  (Optional)
                </span>
              </label>

              <div className="relative">
                <MessageSquare
                  size={18}
                  className="absolute left-4 top-4 text-neutral-400"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={500}
                  rows={4}
                  placeholder="Anything you'd like us to know?"
                  className={`w-full resize-none rounded-xl border ${
                    errors.message
                      ? "border-red-500"
                      : "border-neutral-200"
                  } py-3 pl-11 pr-4 outline-none focus:border-black`}
                />
              </div>

              <div className="mt-1 flex justify-between">
                {errors.message ? (
                  <p className="text-xs text-red-500">
                    {errors.message}
                  </p>
                ) : (
                  <span />
                )}

                <span className="text-xs text-neutral-400">
                  {formData.message.length}/500
                </span>
              </div>
            </div>
          </div>

          {/* TERMS */}

          <div className="mt-8">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="mt-1 h-4 w-4 accent-black"
              />

              <span className="text-sm text-neutral-600">
                I agree to Aptenza's terms and conditions and
                consent to being contacted regarding this property
                visit.
              </span>
            </label>

            {errors.terms && (
              <p className="mt-1 text-xs text-red-500">
                {errors.terms}
              </p>
            )}
          </div>

          {/* SUBMIT */}

          <button
            type="submit"
            className="
              mt-8
              flex w-full
              items-center justify-center gap-2
              rounded-full
              bg-black
              px-6 py-4
              font-semibold
              text-white
              transition
              hover:bg-neutral-800
              active:scale-[0.99]
            "
          >
            <CalendarDays size={18} />
            Schedule Visit
          </button>

          <p className="mt-4 text-center text-xs text-neutral-400">
            We'll contact you to confirm your appointment.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm ;
