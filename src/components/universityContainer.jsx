import React from "react";
import { FaEllipsisH, FaReply } from "react-icons/fa";

const UniversityContainer = () => {
  return (
    <div className="bg-slate-300 w-full h-auto pl-10 pb-10 pr-10 pt-10">
      <div className="w-full h-auto bg-white  pt-5">
        <div className="flex gap-3 pl-5">
          <img
            className="rounded-full w-14 h-14"
            src="https://media.gettyimages.com/id/535796742/photo/queen-mary-court-and-king-william-court.jpg?s=612x612&w=0&k=20&c=zgmEJ9Yu0JsluJGmPedj1TavWkdq2NEkPG5RkzLu1Vw="
            alt="university"
          />
          <div>
            <h4>University of Greenwich</h4>
            <p className="text-slate-500">3 days ago</p>
          </div>
        </div>
        <div className="flex flex-col mt-5 pl-5 pr-5">
          <div>
            <h3 className="text-slate-700">Dear Student!</h3>
          </div>
          <div>
            <p className="text-justify text-slate-700 mt-5 mb-5">
              The University of Greenwich is well-known for its high teaching
              quality, research excellence, the diversity of its students, its
              beautiful, historic campuses in south-east London and Kent and its
              high student satisfaction. The university dates back to 1891, when
              Woolwich Polytechnic, the second-oldest polytechnic in the United
              Kingdom,[6] opened in Woolwich. It was founded by Frank Didden,
              supported by and following the principles of Quintin Hogg, and
              opened to students in October 1891. Like Hogg's pioneering venture
              In 1992, Thames Polytechnic was granted.
            </p>
            <div className="w-1/2 text-slate-700 mt-5">
              <p>
                In 1992, Thames Polytechnic was granted university status by the
                Major government City of London College (1988) were
                incorporated.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <img
            className="w-full h-46"
            src="https://media.gettyimages.com/id/1349297974/photo/multi-ethnic-group-of-latin-american-college-students-smiling.jpg?s=612x612&w=gi&k=20&c=ZQP3cLAbP-M7JDStPkwPCSGUS0i1d7A6AvI-1VB7Ri4="
            alt=""
          />
          <div className="mt-10 ml-5">
            <div className="rounded-full inline bg-slate-100 p-3 text-slate-500 ">
              7 Comments * 2 Replies
            </div>
          </div>
          <div className="pl-5 pr-5">
            <div className="flex gap-x-3 mt-5">
              <div>
                <img
                  className="w-14 h-14 rounded-full"
                  src="https://media.gettyimages.com/id/535796742/photo/queen-mary-court-and-king-william-court.jpg?s=612x612&w=0&k=20&c=zgmEJ9Yu0JsluJGmPedj1TavWkdq2NEkPG5RkzLu1Vw="
                  alt=""
                />
              </div>
              <div className="flex flex-col w-full h-32 border-1 items-start">
                <input
                  type="text"
                  placeholder="Add a comment"
                  className="pl-2 border-none w-full p-0 button !h-32 focus:!border-none focus:!shadow-none focus:!outline-none  focus:!border-slate-200  focus:!shadow-green-500"
                />
                <button className="relative mt-5 ml-3">Post</button>
              </div>
            </div>
            <div className="mt-5 mb-5">
              <span>View five more comments</span>
              <div className="flex flex-row mt-5 gap-x-2">
                <img
                  className="w-14 h-14 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt=""
                />
                <div className="grow">
                  <div className=" p-5  bg-slate-200 text-slate-700 rounded-lg h-auto">
                    <h1 className="text-end h-2">
                      <FaEllipsisH className="inline" />
                    </h1>

                    <h3>
                      Roshan Karthik{" "}
                      <span>
                        <sup>*</sup> &nbsp;1 Week ago
                      </span>
                    </h3>

                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Provident placeat fuga quod sit esse alias dolorum ipsa
                      dolor
                    </p>
                  </div>
                  <div className="mt-2">
                    <FaReply size={20} className="text-slate-300 inline" />
                    <span className="pl-3">3 replies *</span>
                    <span>&nbsp;Reply</span>
                  </div>
                  <div className="flex mt-5 gap-x-3">
                    <img
                      className="w-14 h-14 rounded-full"
                      src="https://media.gettyimages.com/id/535796742/photo/queen-mary-court-and-king-william-court.jpg?s=612x612&w=0&k=20&c=zgmEJ9Yu0JsluJGmPedj1TavWkdq2NEkPG5RkzLu1Vw="
                      alt=""
                    />
                    <div className="p-5  bg-slate-200 text-slate-700 rounded-lg w-auto h-auto">
                      <h1 className="text-end h-2">
                        <FaEllipsisH className="inline" />
                      </h1>
                      <h3>
                        Greenwich University{" "}
                        <span>
                          <sup>*</sup> &nbsp;3 min ago
                        </span>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit. ipsum dolor sit,ipsum dolor sit.
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-5 gap-x-3">
                    <img
                      className="w-14 h-14 rounded-full"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                      alt=""
                    />
                    <div className="p-5  bg-slate-200 text-slate-700 rounded-lg h-auto">
                      <h1 className="text-end h-2">
                        <FaEllipsisH className="inline" />
                      </h1>
                      <h3>
                        Roshan Karthik{" "}
                        <span>
                          <sup>*</sup> &nbsp;3 hours ago
                        </span>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.ipsum dolor sit.
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-5 gap-x-3">
                    <img
                      className="w-14 h-14 rounded-full"
                      src="https://media.gettyimages.com/id/535796742/photo/queen-mary-court-and-king-william-court.jpg?s=612x612&w=0&k=20&c=zgmEJ9Yu0JsluJGmPedj1TavWkdq2NEkPG5RkzLu1Vw="
                      alt=""
                    />
                    <div className="p-5  bg-slate-200 text-slate-700 rounded-lg h-auto">
                      <h1 className="text-end h-2">
                        <FaEllipsisH className="inline" />
                      </h1>
                      <h3>
                        Greenwich University{" "}
                        <span>
                          <sup>*</sup> &nbsp;4 days ago
                        </span>
                      </h3>
                      <p>Lorem ipsum dolor sit,ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div className="flex gap-x-3 mt-5">
                    <div>
                      <img
                        className="w-14 h-14 rounded-full"
                        src="https://media.gettyimages.com/id/535796742/photo/queen-mary-court-and-king-william-court.jpg?s=612x612&w=0&k=20&c=zgmEJ9Yu0JsluJGmPedj1TavWkdq2NEkPG5RkzLu1Vw="
                        alt=""
                      />
                    </div>
                    <div className="flex w-400 h-58 pr-3 border-1 pb-3 ">
                      <input
                        type="text"
                        placeholder="Add a reply"
                        className=" w-400 pl-3 button h-14 border-none focus:!border-none focus:!shadow-none   focus:!border-slate-200 focus:!outline-none focus:!shadow-green-500"
                      />
                      <button className="relative mt-5">Reply</button>
                    </div>
                  </div>
                  <div className="ml-5 p-5"></div>
                </div>
                <div className="w-28"></div>
              </div>
              <div className="flex mt-5 gap-x-3">
                <img
                  className="w-14 h-14 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt=""
                />
                <div>
                  <div className="p-5  bg-slate-200 text-slate-700 rounded-lg w-auto h-auto">
                    <h1 className="text-end h-2">
                      <FaEllipsisH className="inline" />
                    </h1>
                    <h3>
                      Roshan Karthik{" "}
                      <span>
                        <sup>*</sup> &nbsp;3 jours ago
                      </span>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit. ipsum dolor sit,ipsum dolor sit.
                      sit,ipsum dolor sit.
                    </p>
                  </div>
                  <div className="mt-2">
                    <FaReply size={20} className="text-slate-300 inline" />
                    <span className="pl-3">2 replies *</span>
                    <span>&nbsp;Reply</span>
                  </div>
                </div>
              </div>
              <span>Add a comment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityContainer;
