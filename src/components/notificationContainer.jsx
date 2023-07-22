const NotificationContainer = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center pl-5 pr-5 bg-slate-200 ">
      <div className="flex flex-col w-1/2 bg-white pl-1">
        <div>
          1
          <div className="flex ">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="profile"
              className="w-14 h-14 rounded-full"
            />
            <div className="grow rounded-lg p-3 text-slate-300 border-y-1 ">
              <div lassName="flex">
                <h3>Name</h3>
                <span>3 min ago</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolores dignissimos deserunt sit nulla ut repellendus fugiat
                esse dolorem quibusdam aliquam expedita aliquid soluta ipsum,
                neque dolore minus. Sequi, excepturi tenetur?
              </p>
            </div>
          </div>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
};

export default NotificationContainer;
