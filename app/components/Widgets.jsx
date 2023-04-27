import HomeLogo from '../../assets/house-solid.svg';
import ContactLogo from '../../assets/at-solid.svg';
import UserLogo from '../../assets/user-solid.svg';
import BlogLogo from '../../assets/blog-solid.svg';

export default function Widgets({ setOpenModal }) {
    return (
        <div className="flex justify-around bg-stone-900 py-8 rounded-xl">
            <button>
                <img src={HomeLogo} alt="" />
            </button>
            <button onClick={() => setOpenModal(true)}>
                <img src={ContactLogo} alt="" />
            </button>
            <button>
                <img src={UserLogo} alt="" />
            </button>
            <button>
                <img src={BlogLogo} alt="" />
            </button>
        </div>
    );
}
