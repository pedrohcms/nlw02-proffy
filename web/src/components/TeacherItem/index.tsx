import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/41738550?s=460&u=2a371bc24735976cbd9918c7bcd46feef290d5aa&v=4"
          alt="Pedro Henrique"
        />
        <div>
          <strong>Pedro Henrique</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        <br />
        In fringilla eros ac ante sodales lobortis. Fusce vel libero erat.
        Integer et vulputate ex. Donec et erat in eros interdum imperdiet a sed
        sem. Nullam ac ullamcorper lorem. Donec molestie mi est, non ultricies
        dui semper vel. Quisque sodales leo ac orci elementum finibus.
        Suspendisse leo nisl, molestie a ante sed, porttitor elementum risus.
        Pellentesque pulvinar mi nibh. Nam tempor bibendum dapibus. Donec
        imperdiet eleifend rhoncus. Mauris non risus interdum, aliquam purus a,
        pellentesque sem. Cras pharetra eget eros eget consectetur. Pellentesque
        purus massa, congue eu nunc ac, viverra lacinia nunc.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
