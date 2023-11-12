/* eslint-disable react/prop-types */


export default function Button(props) {
  return (
    <div>
      <button className="px-4 py-2 bg-primary text-white hover:bg-primaryHover focus:bg-uiFocus rounded-lg">
     
        {props.children}
      </button>
    </div>
  );
}
