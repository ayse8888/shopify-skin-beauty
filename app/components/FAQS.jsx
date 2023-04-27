import ArrowDownLogo from '../../assets/chevron-down-solid.svg';
import ArrowUpLogo from '../../assets/chevron-up-solid.svg';

export default function FAQS({ faqs, toggleExpanded }) {
    return (
        <div className="border-2 rounded	 p-5 border-stone-900">
            <p className="uppercase font-semibold text-center	text-lg text-decoration-line: underline">
                FAQ Section
            </p>
            {faqs?.map((faq, index) => {
                return (
                    <div className="flex flex-col">
                        <div
                            className="my-2 sm:my-4 md:my-6 shadow cursor-pointer bg-white rounded"
                            onClick={() => toggleExpanded(index)}
                        >
                            <div className="px-6 text-left items-center h-20 select-none flex justify-between flex-row">
                                <h5 className="flex-1">{faq.question}</h5>
                                <div className="flex-none pl-2">
                                    {faq.open ? (
                                        <img src={ArrowUpLogo} alt="React Logo" />
                                    ) : (
                                        <img src={ArrowDownLogo} alt="React Logo" />
                                    )}
                                </div>
                            </div>
                            <div
                                className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-300 ease ${
                                    faq.open ? 'max-h-40' : 'max-h-0'
                                }`}
                            >
                                <p className="pb-4 text-left text-stone-500">{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
            <p className="font-semibold text-center">You could not find your question in FAQS ?</p>
            <p className="font-semibold text-center">Then Contact Us Via Contact Form</p>
        </div>
    );
}
