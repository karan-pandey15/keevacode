 
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { AiOutlineWindows } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import "./footerstyle.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div className="footer_main_container">
        <footer className="footer_container">
          <div className="footer_heading_container">
            <div className="">
              <h1 className="footer_main_heading">KEEVA</h1>
              <p className="footer_main_para">
              Keeva.in is an online store where you can browse through images of various furnture designs. When you find something upu like, you can place and order, and we wll custom make that piece of furniture for you.
              </p>
            </div>
          </div>
          <div className="link_container">
            <h5
              style={{
                color: "#111",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              About
            </h5>
            <ul className="ul_link">
              <li className="">
                <Link href="#" className="">
                  About Us
                </Link>
              </li>
              <li className="">
                <Link href="/pages/privacypage" className="">
                  Privacy Policy
                </Link>
              </li>
              <li className=" ">
                <Link href="/pages/termscond" className=" ">
                  Term&Condition
                </Link>
              </li>

                
              <li className=" ">
                <Link href="/pages/adminsignin" className="">
                   adminsignin
                </Link>
              </li>
            </ul>
          </div>

          <div className="link_container">
            <h5
              style={{
                color: "#111",

                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              Shop
            </h5>
            <ul className="ul_link">
              <li className="">
                <Link href="/pages/beddisplay" className="">
                  BED
                </Link>
              </li>
              <li className="">
                <Link href="/pages/sofadisplay" className="">
                  SOFA
                </Link>
              </li>
              <li className=" ">
                <Link href="/pages/tabledisplay" className=" ">
                  TABLE
                </Link>
              </li>

              <li className=" ">
                <Link href="/pages/mandirdisplay" className=" ">
                  MANDIR
                </Link>
              </li>
        
             
            </ul>
          </div>

          <div className="link_container">
            <h5
              style={{
                color: "#111",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
               
            </h5>
            <ul className="ul_link">
             
              <li className=" ">
                <Link href="/pages/chairdisplay" className="">
                  CHAIR
                </Link>
              </li>

              <li className=" ">
                <Link href="/pages/kafsardisplay" className=" ">
                  KAFSAR
                </Link>
              </li>
              <li className=" ">
                <Link href="/pages/wardrobedisplay" className="">
                  WARDROBE 
                </Link>
              </li>
              
              <li className=" ">
                <Link href="/pages/kitchendisplay" className="">
                  KITCHEN
                </Link>
              </li>

              <li className=" ">
                <Link href="/pages/windowdisplay" className="">
                  WINDOW
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      <div className="small_footer_main_container">
        <div className="small_footer_child_container">
          <Link href="/">
            <div className="small_container">
              <IoHomeOutline />
              <p className="small_footer_para">HOME</p>
            </div>
          </Link>

          <Link href="/pages/about">
            <div className="small_container">
              <AiOutlineWindows />
              <p className="small_footer_para">About</p>
            </div>
          </Link>

          <Link href="/pages/categorypage">
            <div className="small_container">
              <BiCategory />
              <p className="small_footer_para">Category</p>
            </div>
          </Link>

          <Link href="/pages/allprd">
            <div className="small_container">
              <BsShop />
              <p className="small_footer_para">Shop</p>
            </div>
          </Link>

          <Link
            href="https://wa.me/7275759000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="small_container">
              <FaWhatsapp />
              <p className="small_footer_para">Chat</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
