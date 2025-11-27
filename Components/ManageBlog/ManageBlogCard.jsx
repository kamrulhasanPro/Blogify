import React from "react";

const ManageBlogCard = ({ blog, handleRemove}) => {
    const { _id, title, shortDescription, writer, createdAt } = blog;
  const btnStyle =
    "py-1 px-1.5 flex items-center justify-center rounded-full gap-1";

  const actionBtn = (
    <>
      <Link href={`blogs/${_id}`} className="btn btn-success text-white">
        Details
      </Link>
      <button
        onClick={handleRemove}
        className="btn btn-secondary bg-red-400 text-white"
      >
        Remove
      </button>
    </>
  );
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center gap-2 justify-between my_bg text-white rounded-xl p-4 mb-4 bg-primary">
        {/* details */}
        <div className="flex-2">
          <h5 className="text-2xl font-medium">{title}</h5>
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <button className={`${btnStyle} bg-red-300`}>
              <BiSolidCategory />
              {"Design"}
            </button>
            <button className={`${btnStyle} bg-emerald-300`}>
              <IoPerson />
              {writer.name}
            </button>
            <button className={`${btnStyle} bg-indigo-300`}>
              <MdDateRange />
              {new Date(createdAt).toLocaleDateString()}
            </button>
          </div>
          <p className="mt-2">
            {shortDescription}
            {/* {description.length > 100 && (
                  <span className="text-indigo-600 hover:underline"> ...More</span>
                )} */}
          </p>
        </div>

        {/* action */}
        <div className="md:flex-1 flex md:justify-end">
          <div className="flex flex-col bg-white p-2 rounded-lg gap-2 ">
            {actionBtn}
          </div>

          <div className="space-x-2 md:hidden">{actionBtn}</div>
        </div>
      </div>
    </div>
  );
};

export default ManageBlogCard;
