
import InputForm from "../Elements/Input/inputForm";
// import { useState } from "react";
// import { konsultasi } from "../../services/konsultasi.service";

const FormRegisterMentor = () => {
  // di pake pas udah sambung keBE
  //   const [konsulFailed, setKonsulFailed] = useState("");
  //   const handleAddQuestion = (event) => {
  //     event.preventDefault();
  //     const data = {
  //       name: event.target.fullname.value,
  //       email: event.target.email.value,
  //       question: event.target.pertanyaan.value,
  //     };
  //     konsultasi(data, (status, res) => {
  //       if (status) {
  //         console.log(res);
  //       } else {
  //         setKonsulFailed(res.response.data);
  //       }
  //     });
  //   };

  return (
    // <form onSubmit={handleAddQuestion}>
    <form onSubmit="">
      <div className="mb-8">
        <InputForm
          type="text"
          label="Name"
          placeholder="Your Name"
          name="name"
          requiredStatus={true}
        />
      </div>
      <div className="mb-8">
        <InputForm
          type="tel"
          label="Phone"
          placeholder="e.g. 0822xxxxxxxx"
          name="name"
          requiredStatus={true}
        />
      </div>
      <div className="mb-8">
        <InputForm
          type="email"
          label="Email"
          placeholder="e.g. example@gmail.com"
          name="name"
          requiredStatus={true}
        />
      </div>
      <div className="mb-8">
        <InputForm
          type="text"
          label="Job"
          placeholder="Your Job"
          name="name"
          requiredStatus={true}
        />
      </div>
      <div className="mb-8">
        <InputForm
          type="text"
          label="Location"
          placeholder="Your Location"
          name="name"
          requiredStatus={true}
        />
      </div>
      {/* <Button type="submit" classname="p-2 mt-6 w-full bg-primary rounded-full">
        Kirim
      </Button> */}
    </form>
  );
};

export default FormRegisterMentor;
