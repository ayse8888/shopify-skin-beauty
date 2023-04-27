import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { questions } from '~/data/questions';
import { colors } from '~/data/colors';
import ContactUsForm from '../components/ContactUsForm';
import FAQS from '../components/FAQS';
import UploadLogo from '../components/UploadLogo';
import Widgets from '../components/Widgets';
import ChangeWidgetColor from '../components/ChangeWidgetColor';

export function meta() {
    return [{ title: 'Hydrogen' }, { description: 'A custom storefront powered by Hydrogen' }];
}

export default function Index() {
    const form = useRef();
    const [openModal, setOpenModal] = useState(false);
    const [file, setFile] = useState('');
    const [faqs, setfaqs] = useState(questions);
    const [inputValue, setInputValue] = useState(colors[0].colorCode);
    const [bgcolor, setbgColor] = useState(colors[0].colorCode);
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleBackgroundChange = () => {
        setbgColor(inputValue);
    };

    const toggleExpanded = (index) => {
        setfaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            }),
        );
    };

    const sendEmail = (e) => {
        e.preventDefault();
        -emailjs
            .sendForm(
                'service_71s2u1k',
                'template_vhach26',
                form.current,
                'user_wB9r1kTnY69BGCuL7Bw3U',
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert('SUCCESS!');
                },
                (error) => {
                    console.log(error.text);
                    alert('FAILED...', error);
                },
            );
    };

    return (
        <div>
            <Widgets setOpenModal={setOpenModal} />
            {openModal ? (
                <div
                    className={`relative inset-x-0 inset-y-12 border-2 rounded px-24 pb-20 mb-10 h-auto ${bgcolor}`}
                >
                    <div>
                        <ChangeWidgetColor
                            handleBackgroundChange={handleBackgroundChange}
                            handleInputChange={handleInputChange}
                            colors={colors}
                        />
                        <UploadLogo file={file} setFile={setFile} />
                        <ContactUsForm form={form} sendEmail={sendEmail} />
                        <div className="h-40"></div>
                        <FAQS faqs={faqs} toggleExpanded={toggleExpanded} />
                    </div>
                    <div className="flex justify-end mt-10">
                        <button
                            onClick={() => setOpenModal(false)}
                            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-center mt-5">
                    Please read READ.md file for the project details !!!
                </p>
            )}
        </div>
    );
}
