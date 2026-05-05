import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../../config";
import {  useNavigate } from "react-router-dom";

const Editor = () => {
    const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  async function submitBtn(){
    if(!title || !content){
        alert('Both fields required')
        return
    }
    const token = localStorage.getItem('token')
    try {
        const res = await axios.post(`${BACKEND_URL}/api/v1/blog`,
            {
                title,
                content
            },{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }
        )
        
        navigate("/blogs")

    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm p-6 sm:p-10 flex flex-col gap-6">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full text-3xl sm:text-5xl font-bold outline-none placeholder-gray-400"
        />

        <textarea
          name="content"
          id="content"
          placeholder="Tell your story..."
          onChange={(e) => setContent(e.target.value)}
          value={content}
          className="w-full min-h-[250px] sm:min-h-[350px] text-lg sm:text-xl leading-relaxed outline-none resize-none placeholder-gray-400"
        />

        <div className="flex justify-end items-end">
          <button
            type="button"
            onClick={submitBtn}
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2.5 rounded-full transition shadow-sm"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
