import React, { Fragment, useState } from "react";
import axios from "axios";

const FileUploads = () => {
  //hooks for clean looking and less code
  const [file, setFile] = useState();
  const [filename, setFilename] = useState("파일 선택");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    //array for the single file uploads
    setFile(e.target.files[0]);
    //put into set file name to change {filename} once it selected.
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // name for backend
    formData.append("file", file);

    try {
      const res = await axios.post(
        "https://www.myspaceti.me/api/submitTest",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage("File Uploaded");
    } catch (error) {
      //   if (error.response.status === 500) {
      //     setMessage("There was a problem with the server");
      //   } else {
      //     setMessage(error.response.data.msg);
      //   }
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="custom-file mt-4">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
          <label className="custom-file-label" htmlFor="customFIle">
            {filename}
          </label>
        </div>
        <button
          type="submit"
          value="upload"
          className="btn btn-primary btn-block mt-4"
        >
          upload
        </button>
      </form>
      {uploadedFile ? (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <img
              style={{ width: "100%" }}
              src={uploadedFile.filePath}
              alt=""
            ></img>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default FileUploads;

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addtestList } from "Redux/Modules/testSlice";

// export default function Test() {
//   const [inputValue, setInputValue] = useState("");
//   const [file, setFile] = useState("");
//   const [uploadedFile, setUploadedFile] = useState({});

//   const dispatch = useDispatch();
//   const tList = useSelector((state) => state.testSlice);
//   console.log(tList);

//   const onCreate = (e) => {
//     e.preventDefault();
//     console.log(e);
//     const newTest = { testName: inputValue }; //!comment 이름 변경 될 수있으니 확인할것
//     dispatch(addtestList(newTest));
//     setInputValue("");
//     const formData = new FormData();
//     formData.append("file", file);
//   };

//   return (
//     <div>
//       {/* <label>
//         <div>
//         <img src={btnStart} alt="btnStart" /> </div>
//       </label> */}
//       <form onSubmit={onCreate}>
//         <input
//           type="text"
//           onChange={(e) => setInputValue(e.target.value)}
//           testName={inputValue}
//         />
//         <input
//           type="file"
//           id="ex_file"
//           // name={name}
//           accept="image/jpg, image/png, image/jpeg"
//           onChange={onCreate}
//           //   onChange={(e) => console.log(e.target.files[0])}
//         />
//         <button type="submit">추가</button>
//       </form>
//     </div>
//   );
// }
