export default function ContactUsForm({ form, sendEmail }) {
    return (
        <div className="border-2 rounded p-5 border-stone-900">
            <p className="uppercase font-semibold text-center	text-lg text-decoration-line: underline">
                Contact Us
            </p>
            <form ref={form} onSubmit={sendEmail}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-2">
                                <label
                                    for="user_name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Full name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="user_name"
                                        id="user_name"
                                        autocomplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    for="user_email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Your Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="user_email"
                                        name="user_email"
                                        type="email"
                                        autocomplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    for="to_email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Receiver Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="to_email"
                                        name="to_email"
                                        type="email"
                                        autocomplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label
                                    for="message"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Your Message
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="3"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                        resize-none
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}
