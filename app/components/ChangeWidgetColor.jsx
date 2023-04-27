export default function ChangeWidgetColor({ handleBackgroundChange, handleInputChange, colors }) {
    return (
        <div className="mt-5">
            <select onChange={handleInputChange}>
                {colors?.map((color) => (
                    <option value={color.colorCode}>{color.label}</option>
                ))}
            </select>
            <button
                className="cursor-pointer ml-3 bg-white rounded p-2"
                onClick={handleBackgroundChange}
            >
                Change Widget Color
            </button>
        </div>
    );
}
