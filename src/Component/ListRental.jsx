import { useState } from "react";
import {
  Home,
  MapPin,
  IndianRupee,
  BedDouble,
  Bath,
  Car,
  PawPrint,
  Sofa,
  CalendarDays,
  Ruler,
  Building2,
  User,
  Mail,
  Phone,
  Upload,
  Check,
  ChevronRight,
} from "lucide-react";

const ListRental = () => {
  const [formData, setFormData] = useState({
    propertyTitle: "",
    propertyType: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",

    monthlyRent: "",
    securityDeposit: "",
    availableFrom: "",

    bedrooms: "",
    bathrooms: "",
    area: "",
    floor: "",

    parking: false,
    petsAllowed: false,
    furnished: "",
    balcony: false,
    airConditioning: false,
    laundry: false,
    elevator: false,
    utilitiesIncluded: false,

    description: "",

    ownerName: "",
    ownerEmail: "",
    ownerPhone: "",

    images: [],
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImages = (e) => {
    setFormData((prev) => ({
      ...prev,
      images: Array.from(e.target.files),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Property Listing:", formData);

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f7f7f5] px-6">
        <div className="max-w-md w-full bg-white rounded-3xl p-10 text-center shadow-xl">
          <div className="w-16 h-16 mx-auto rounded-full bg-black text-white flex items-center justify-center mb-6">
            <Check size={30} />
          </div>

          <h1 className="text-3xl font-semibold text-neutral-900">
            Property Submitted
          </h1>

          <p className="text-neutral-500 mt-4 leading-7">
            Thanks for listing your property with Aptenza. Our team will
            review the details and contact you shortly.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-neutral-800 transition"
          >
            List Another Property
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f5] py-12 px-4 sm:px-6 lg:px-10">

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="flex items-center gap-2 text-sm text-neutral-500 mb-4">
          <Home size={16} />
          <span>Aptenza</span>
          <ChevronRight size={15} />
          <span>List Your Property</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
          List your rental property
        </h1>

        <p className="mt-3 text-neutral-500 max-w-2xl text-base md:text-lg">
          Share your property details with potential tenants and let Aptenza
          help you find the right renter.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto space-y-6"
      >

        {/* PROPERTY INFORMATION */}
        <section className="bg-white rounded-3xl border border-neutral-200 p-6 md:p-8">

          <SectionHeader
            icon={<Home size={20} />}
            title="Property information"
            description="Tell us about the property you're listing."
          />

          <div className="grid md:grid-cols-2 gap-5 mt-8">

            <Input
              label="Property title"
              name="propertyTitle"
              placeholder="Modern 3-Bedroom Apartment"
              value={formData.propertyTitle}
              onChange={handleChange}
              required
            />

            <Select
              label="Property type"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              options={[
                "Apartment",
                "Flat",
                "Studio",
                "Villa",
                "House",
                "Penthouse",
              ]}
              required
            />

            <div className="md:col-span-2">
              <Input
                label="Street address"
                name="address"
                placeholder="123 Park Avenue"
                value={formData.address}
                onChange={handleChange}
                icon={<MapPin size={17} />}
                required
              />
            </div>

            <Input
              label="City"
              name="city"
              placeholder="Kanpur"
              value={formData.city}
              onChange={handleChange}
              required
            />

            <Input
              label="State"
              name="state"
              placeholder="Uttar Pradesh"
              value={formData.state}
              onChange={handleChange}
              required
            />

            <Input
              label="ZIP / Postal code"
              name="zipCode"
              placeholder="208001"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />

          </div>
        </section>


        {/* PRICE */}
        <section className="bg-white rounded-3xl border border-neutral-200 p-6 md:p-8">

          <SectionHeader
            icon={<IndianRupee size={20} />}
            title="Pricing & availability"
            description="Set your rental price and availability."
          />

          <div className="grid md:grid-cols-3 gap-5 mt-8">

            <Input
              label="Monthly rent"
              name="monthlyRent"
              type="number"
              placeholder="25000"
              value={formData.monthlyRent}
              onChange={handleChange}
              icon={<IndianRupee size={17} />}
              required
            />

            <Input
              label="Security deposit"
              name="securityDeposit"
              type="number"
              placeholder="50000"
              value={formData.securityDeposit}
              onChange={handleChange}
              icon={<IndianRupee size={17} />}
              required
            />

            <Input
              label="Available from"
              name="availableFrom"
              type="date"
              value={formData.availableFrom}
              onChange={handleChange}
              required
            />

          </div>
        </section>


        {/* PROPERTY DETAILS */}
        <section className="bg-white rounded-3xl border border-neutral-200 p-6 md:p-8">

          <SectionHeader
            icon={<Building2 size={20} />}
            title="Property details"
            description="Give tenants a clear idea of the size and layout."
          />

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mt-8">

            <Input
              label="Bedrooms"
              name="bedrooms"
              type="number"
              placeholder="3"
              value={formData.bedrooms}
              onChange={handleChange}
              icon={<BedDouble size={17} />}
              required
            />

            <Input
              label="Bathrooms"
              name="bathrooms"
              type="number"
              placeholder="2"
              value={formData.bathrooms}
              onChange={handleChange}
              icon={<Bath size={17} />}
              required
            />

            <Input
              label="Area (sq ft)"
              name="area"
              type="number"
              placeholder="1450"
              value={formData.area}
              onChange={handleChange}
              icon={<Ruler size={17} />}
              required
            />

            <Input
              label="Floor"
              name="floor"
              placeholder="5th"
              value={formData.floor}
              onChange={handleChange}
            />

          </div>
        </section>


        {/* AMENITIES */}
        <section className="bg-white rounded-3xl border border-neutral-200 p-6 md:p-8">

          <SectionHeader
            icon={<Sofa size={20} />}
            title="Features & amenities"
            description="Select everything available in your property."
          />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">

            <Feature
              name="parking"
              label="Parking available"
              icon={<Car size={19} />}
              checked={formData.parking}
              onChange={handleChange}
            />

            <Feature
              name="petsAllowed"
              label="Pets allowed"
              icon={<PawPrint size={19} />}
              checked={formData.petsAllowed}
              onChange={handleChange}
            />

            <Feature
              name="balcony"
              label="Balcony"
              checked={formData.balcony}
              onChange={handleChange}
            />

            <Feature
              name="airConditioning"
              label="Air conditioning"
              checked={formData.airConditioning}
              onChange={handleChange}
            />

            <Feature
              name="laundry"
              label="Laundry"
              checked={formData.laundry}
              onChange={handleChange}
            />

            <Feature
              name="elevator"
              label="Elevator"
              checked={formData.elevator}
              onChange={handleChange}
            />

            <Feature
              name="utilitiesIncluded"
              label="Utilities included"
              checked={formData.utilitiesIncluded}
              onChange={handleChange}
            />

          </div>

          <div className="mt-6 max-w-sm">
            <Select
              label="Furnished status"
              name="furnished"
              value={formData.furnished}
              onChange={handleChange}
              options={[
                "Fully Furnished",
                "Semi Furnished",
                "Unfurnished",
              ]}
              required
            />
          </div>

        </section>


        {/* DESCRIPTION */}
        <section className="bg-white rounded-3xl border border-neutral-200 p-6 md:p-8">

          <SectionHeader
            icon={<Home size={20} />}
            title="Property description"
            description="Describe what makes your property special."
          />

          <div className="mt-8">
            <label className="block text-sm font-medium text-neutral-800 mb-2">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Describe the property, neighborhood, nearby facilities, transport, views, etc."
              className="w-full rounded-2xl border border-neutral-200 px-4 py-4 outline-none resize-none focus:border-black focus:ring-1 focus:ring-black transition"
            />

            <p className="text-xs text-neutral-400 mt-2">
              Mention nearby schools, offices, metro stations, markets,
              amenities and other useful information.
            </p>
          </div>
        </section>


        {/* PHOTOS */}
        <section className="bg-white rounded-3xl border border-neutral-200 p-6 md:p-8">

          <SectionHeader
            icon={<Upload size={20} />}
            title="Property photos"
            description="Upload high-quality photos of your property."
          />

          <label className="mt-8 border-2 border-dashed border-neutral-200 rounded-3xl min-h-52 flex flex-col items-center justify-center cursor-pointer hover:border-neutral-400 transition">

            <Upload size={28} className="text-neutral-400" />

            <p className="mt-4 font-medium text-neutral-800">
              Upload property photos
            </p>

            <p className="text-sm text-neutral-400 mt-1">
              JPG, PNG up to 10MB each
            </p>

            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImages}
              className="hidden"
            />

          </label>

          {formData.images.length > 0 && (
            <p className="text-sm text-neutral-500 mt-4">
              {formData.images.length} photo(s) selected
            </p>
          )}

        </section>


        {/* OWNER DETAILS */}
        <section className="bg-white rounded-3xl border border-neutral-200 p-6 md:p-8">

          <SectionHeader
            icon={<User size={20} />}
            title="Owner information"
            description="We'll use these details to contact you."
          />

          <div className="grid md:grid-cols-3 gap-5 mt-8">

            <Input
              label="Full name"
              name="ownerName"
              placeholder="Your name"
              value={formData.ownerName}
              onChange={handleChange}
              icon={<User size={17} />}
              required
            />

            <Input
              label="Email address"
              name="ownerEmail"
              type="email"
              placeholder="you@example.com"
              value={formData.ownerEmail}
              onChange={handleChange}
              icon={<Mail size={17} />}
              required
            />

            <Input
              label="Phone number"
              name="ownerPhone"
              type="tel"
              placeholder="+91 9876543210"
              value={formData.ownerPhone}
              onChange={handleChange}
              icon={<Phone size={17} />}
              required
            />

          </div>
        </section>


        {/* SUBMIT */}
        <div className="bg-black text-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="text-xl font-medium">
              Ready to list your property?
            </h3>

            <p className="text-neutral-400 text-sm mt-1">
              Review your information before submitting.
            </p>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition flex items-center justify-center gap-2"
          >
            Submit Property
            <ChevronRight size={18} />
          </button>

        </div>

      </form>
    </div>
  );
};


/* ---------------- COMPONENTS ---------------- */

const SectionHeader = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4 items-start">

      <div className="w-11 h-11 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
        {icon}
      </div>

      <div>
        <h2 className="text-xl font-semibold text-neutral-900">
          {title}
        </h2>

        <p className="text-sm text-neutral-500 mt-1">
          {description}
        </p>
      </div>

    </div>
  );
};


const Input = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
  required = false,
}) => {
  return (
    <div>

      <label className="block text-sm font-medium text-neutral-800 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <div className="relative">

        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
            {icon}
          </div>
        )}

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full rounded-xl border border-neutral-200 bg-white px-4 py-3.5 outline-none focus:border-black focus:ring-1 focus:ring-black transition ${
            icon ? "pl-11" : ""
          }`}
        />

      </div>

    </div>
  );
};


const Select = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) => {
  return (
    <div>

      <label className="block text-sm font-medium text-neutral-800 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3.5 outline-none focus:border-black focus:ring-1 focus:ring-black transition"
      >
        <option value="">Select {label}</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

    </div>
  );
};


const Feature = ({
  name,
  label,
  icon,
  checked,
  onChange,
}) => {
  return (
    <label
      className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition ${
        checked
          ? "border-black bg-neutral-50"
          : "border-neutral-200 hover:border-neutral-400"
      }`}
    >

      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 accent-black"
      />

      <span className="text-neutral-500">
        {icon}
      </span>

      <span className="text-sm font-medium">
        {label}
      </span>

    </label>
  );
};

export default ListRental;