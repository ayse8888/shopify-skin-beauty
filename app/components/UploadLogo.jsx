export default function UploadLogo({ file, setFile }) {
    return (
        <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                    <label for="photo" className="block text-sm font-medium leading-6 text-gray-900">
                        Photo
                    </label>
                    <div className="mt-2 flex items-center gap-x-3">
                        <img
                            className="h-12 w-12"
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/063/original/default.png?1682604228'
                            }
                            alt=""
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                                for="file"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                                <span>Upload a logo</span>
                                <input
                                    id="file"
                                    name="file"
                                    type="file"
                                    className="sr-only"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
