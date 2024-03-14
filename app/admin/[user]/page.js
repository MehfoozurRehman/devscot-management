import Image from "next/image";
import userPic from "@/public/user.png";
import "@/styles/chat.css";
import { useState } from "react";

export default function page() {
  const [isReply, setIsReply] = useState(false);
  return (
    <div className="container__main">
      <div className="container__main__chat">
        <div className="container__main__chat__header">
          <div className="container__main__chat__header__img">
            <Image src={userPic} />
          </div>
          <div className="container__main__chat__header__name">User Name</div>
        </div>
        <div className="container__main__chat__body">
          <div className="container__main__chat__body__entry">
            <div className="container__main__chat__body__entry__content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
              iste.
              <div className="container__main__chat__body__entry__content__time">
                Today 10:33 Am
              </div>
            </div>
            <button className="container__main__chat__body__entry__reply">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-reply"
              >
                <polyline points="9 17 4 12 9 7" />
                <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
              </svg>
            </button>
          </div>
          <div className="container__main__chat__body__entry">
            <div className="container__main__chat__body__entry__content container__main__chat__body__entry__content__reverse">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
              iste. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aliquid, iste. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Aliquid, iste. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Aliquid, iste.
              <div className="container__main__chat__body__entry__content__time">
                Today 10:33 Am
              </div>
            </div>
            <button className="container__main__chat__body__entry__reply">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-reply"
              >
                <polyline points="9 17 4 12 9 7" />
                <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
              </svg>
            </button>
          </div>
          <div className="container__main__chat__body__entry">
            <div className="container__main__chat__body__entry__content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
              iste.
              <div className="container__main__chat__body__entry__content__time">
                Today 10:33 Am
              </div>
            </div>
            <button className="container__main__chat__body__entry__reply">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-reply"
              >
                <polyline points="9 17 4 12 9 7" />
                <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
              </svg>
            </button>
          </div>
          <div className="container__main__chat__body__entry">
            <div className="container__main__chat__body__entry__content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
              iste. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aliquid, iste. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Aliquid, iste.
              <div className="container__main__chat__body__entry__content__time">
                Today 10:33 Am
              </div>
            </div>
            <button className="container__main__chat__body__entry__reply">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-reply"
              >
                <polyline points="9 17 4 12 9 7" />
                <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
              </svg>
            </button>
          </div>
          <div className="container__main__chat__body__entry">
            <div className="container__main__chat__body__entry__content container__main__chat__body__entry__content__reverse">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
              iste. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aliquid, iste. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Aliquid, iste. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Aliquid, iste.
              <div className="container__main__chat__body__entry__content__time">
                Today 10:33 Am
              </div>
            </div>
            <button className="container__main__chat__body__entry__reply">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-reply"
              >
                <polyline points="9 17 4 12 9 7" />
                <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
              </svg>
            </button>
          </div>
          <div className="container__main__chat__body__entry">
            <div className="container__main__chat__body__entry__content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
              iste.
              <div className="container__main__chat__body__entry__content__time">
                Today 10:33 Am
              </div>
            </div>
            <button className="container__main__chat__body__entry__reply">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-reply"
              >
                <polyline points="9 17 4 12 9 7" />
                <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
              </svg>
            </button>
          </div>
          <div className="container__main__chat__body__entry">
            <div className="container__main__chat__body__entry__content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
              iste. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aliquid, iste. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Aliquid, iste.
              <div className="container__main__chat__body__entry__content__time">
                Today 10:33 Am
              </div>
            </div>
            <button className="container__main__chat__body__entry__reply">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-reply"
              >
                <polyline points="9 17 4 12 9 7" />
                <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
              </svg>
            </button>
          </div>
        </div>
        <div className="container__main__chat__footer">
          <div className="container__main__chat__footer__reply">
            <div className="container__main__chat__footer__reply__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              corporis.
            </div>
          </div>
          <div className="container__main__chat__footer__input__box">
            <input type="text" />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-send"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
