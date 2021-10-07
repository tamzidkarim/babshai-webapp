import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../../components";
import Logo from "../../assets/images.svg";
import { supabase } from "../../supabaseClient";
import { useHistory } from "react-router";

const FileUpload = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    productName: "",
    image: "",
    category: "",
    budget: "",
    description: "",
    quantity: "",
    certificates: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = supabase.auth.user();

    if (!user) history.push("/login");

    setIsSubmitting(true);
    const { error } = await supabase.from("posts").insert(
      {
        product_name: values.productName,
        category: values.category,
        quantity: values.quantity,
        estimated_budget: values.budget,
        required_certificates: values.certificates,
        description: values.description,
        user_id: user.id,
      },
      { returning: "minimal" }
    );

    if (!error) {
      history.push("/");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleImage = (e) => {
    e.preventDefault();
    setSelectedFile(e.target.files[0]);
  };

  // async function uploadImage() {
  //   try {
  //     if (!selectedFile) {
  //       throw new Error("You must select an image to upload.");
  //     }

  //     const file = selectedFile;
  //     const fileExt = file.name.split(".").pop();
  //     const fileName = `${Math.random()}.${fileExt}`;
  //     const filePath = `${fileName}`;

  //     let { error: uploadError } = await supabase.storage
  //       .from("avatars")
  //       .upload(filePath, file);

  //     if (uploadError) {
  //       throw uploadError;
  //     }

  //     onUpload(filePath);
  //   } catch (error) {
  //     alert(error.message);
  //   } finally {
  //     console.log("DONE");
  //   }
  // }

  useEffect(() => {
    const user = supabase.auth.user();

    if (!user) history.push("/login");
  });

  return (
    <div className="antialiased">
      <Navbar />
      <div className="container md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto px-6  md:px-4 py-6 md:py-8 mb-10">
        <h1 className="text-2xl lg:text-4xl lg:mt-8 font-bold tracking-wide leading-relaxed">
          Fill in the details below
        </h1>

        <div className="">
          <form
            onSubmit={handleSubmit}
            className="mt-4 lg:mt-8 grid grid-cols-1  md:grid-cols-3"
            action=""
          >
            <div className="md:col-span-2">
              <label className="block text-gray-700">Product Name</label>
              <input
                type="text"
                name="productName"
                id=""
                value={values.productName}
                onChange={handleChange}
                placeholder="e.g. Golden Silk Threads"
                className="w-full md:w-4/5 xl:w-3/5 px-4 py-2 md:py-3 lg:py-4  font-medium placeholder-gray-400 mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
                required
              />
            </div>
            <div className="mt-5  md:row-span-3 ">
              <label className="flex flex-col rounded-lg border-4 border-dashed justify-center items-center md:w-full xl:w-11/12 md:h-40 lg:h-48 p-6 md:P-6 lg:space-y-2 xl:space-y-4 text-center">
                <img className="object-cover w-20 h-20" src={Logo} alt="logo" />
                <h1 className="pt-2">Drop product image here or browse</h1>
                <input
                  type="file"
                  className=""
                  onChange={handleImage}
                  accept="image/*"
                />
              </label>
            </div>
            <div className="mt-4 md:col-span-2">
              <label className="block text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                id=""
                value={values.category}
                onChange={handleChange}
                placeholder="e.g. Threads"
                className="w-full md:w-4/5 xl:w-3/5 px-4 py-2 md:py-3 lg:py-4 font-medium placeholder-gray-400 mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
                required
              />
            </div>
            <div className="mt-4 md:col-span-2">
              <label className="block text-gray-700">Quantity</label>
              <input
                type="text"
                name="quantity"
                id=""
                value={values.quantity}
                onChange={handleChange}
                placeholder="e.g. 1000 Pcs"
                className="w-full md:w-4/5 xl:w-3/5 px-4 py-2 md:py-3 lg:py-4 font-medium placeholder-gray-400 mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
                required
              />
            </div>
            <div className="mt-4 md:col-span-1">
              <label className="block text-gray-700">
                Estimated Budget (In USD)
              </label>
              <input
                type="number"
                name="budget"
                id=""
                value={values.budget}
                onChange={handleChange}
                placeholder="e.g. 1500"
                className="w-full md:w-4/5 xl:w-3/5 px-4 py-2 md:py-3 lg:py-4  font-medium placeholder-gray-400 mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
                required
                min={0}
              />
            </div>
            <div className="mt-4 md:col-span-1">
              <label className="block text-gray-700">
                Required certificates
              </label>
              <input
                type="text"
                name="certificates"
                id=""
                value={values.certificates}
                onChange={handleChange}
                placeholder="e.g. Oeko-tex® / GOTS / Recycle"
                className="w-full md:w-4/5 xl:w-3/5 px-4 py-2 md:py-3 lg:py-4 font-medium placeholder-gray-400 mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
                required
                min={0}
              />
            </div>
            <div className="mt-4 md:col-span-3  ">
              <label className="block text-gray-700">Description</label>
              <textarea
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
                id=""
                rows="6"
                className="w-full mt-2 outline-none px-4 py-2 md:py-4 lg:py-4 border border-light-theme focus:border-regular-theme "
                required
              ></textarea>
            </div>
            <div className="mt-7">
              <button className="bg-light-theme text-white font-semibold px-6 lg:px-10 py-2 lg:py-3 tracking-wide leading-relaxed">
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FileUpload;
