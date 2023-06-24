import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Nav from "../components/dashboard/NavBar";

export default function Dash() {
  return (
    <>
      <div className="bg-blue min-h-screen ">
        <Nav />
        <main className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eos
          expedita nam sapiente! Saepe enim repellat ex possimus neque maxime,
          eius ducimus? Repudiandae ex voluptate sit ea nulla quibusdam
          deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          dolores voluptatum iusto, quibusdam asperiores soluta sapiente, labore
          veniam rerum ut eaque, sit odit ea natus minima. Dolorem odit ducimus
          obcaecati. Numquam culpa cum praesentium impedit, autem eius incidunt
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
          officiis qui dignissimos voluptate blanditiis dolorum eveniet!
          Adipisci sed accusantium ut esse officia vitae voluptate eum
          asperiores reiciendis dolores! Laborum, sint! Veniam natus obcaecati
          odit ex praesentium ab est eveniet culpa voluptatum, laudantium
          doloribus consequatur accusantium debitis minima asperiores reiciendis
          sint vero omnis? Magnam, velit ratione voluptas reiciendis ullam
          tempore quam! Perspiciatis obcaecati odit quas reiciendis eius
          laudantium velit, expedita similique accusantium excepturi voluptatum
          repellat earum nobis ad culpa quae porro aliquam saepe nisi! Quam,
          ipsum maiores officiis asperiores a fugit. A, et molestiae sequi
          doloremque ab asperiores, sed nisi accusamus at voluptate ipsum
          voluptatem illo facilis distinctio? Assumenda quam quos tempore
          repudiandae repellat, explicabo, consequuntur eveniet, eligendi
          voluptates sunt eum? Obcaecati eius illum, reiciendis rem repellendus
          ex quasi, rerum commodi perferendis beatae doloremque aliquam dolorem
          incidunt distinctio, quis libero officia animi? Soluta excepturi ab
          ut? Ipsam corrupti explicabo dolor officia. Numquam necessitatibus
          voluptate ut ducimus culpa quis consectetur dolorem officia deserunt
          omnis velit incidunt debitis ipsam provident fugiat illum eaque
          mollitia voluptatem non quasi, et suscipit! Vel expedita blanditiis
          temporibus? Quam maiores quae earum harum. Consectetur, praesentium
          expedita? Sed dicta nobis quaerat! Necessitatibus minima, facilis
          molestiae consequuntur cupiditate adipisci incidunt perspiciatis
          voluptate modi eveniet odit debitis explicabo excepturi est nostrum!
          Consectetur sint sapiente ab eaque provident impedit vero sequi iste,
          sed, inventore vitae voluptatum maiores saepe ducimus quae. Corporis
          et natus quia voluptatum doloremque officiis qui, modi iure excepturi
          voluptas. Ullam deleniti totam ducimus ipsum est laudantium error
          tempore quas facere amet delectus vero atque, impedit inventore eius
          consectetur eos itaque dolor odit? Esse doloribus, ipsam inventore
          incidunt labore illo. Blanditiis consectetur, culpa veniam deleniti
          obcaecati id molestiae in odio dolorem, perspiciatis illo quae.
          Architecto soluta officiis quisquam vero laborum sit quia natus a iure
          beatae quibusdam, aspernatur ipsum deserunt? At amet consequatur
          molestiae. Deleniti, autem architecto quas harum alias aperiam,
          assumenda doloribus impedit earum dolores accusantium quod cum
          reiciendis vitae voluptatibus eaque veritatis excepturi possimus
          fugiat totam a. Laboriosam! Dolor esse eveniet rem provident non odio
          ratione deleniti ab at aperiam? Eum minus nisi ducimus quod eaque
          repellendus aspernatur, impedit laboriosam temporibus recusandae
          similique fuga totam inventore, repudiandae delectus? Ad sequi
          obcaecati doloremque at quasi officia exercitationem dignissimos
          voluptatem error explicabo, quas vero, perspiciatis voluptas provident
          cupiditate, fugit dolore ipsa. Deserunt similique maiores assumenda
          soluta, at et quam exercitationem! Voluptatibus maxime deserunt
          facilis blanditiis pariatur molestiae necessitatibus velit architecto
          a cum facere asperiores ducimus eum enim nostrum odit omnis cumque,
          voluptates qui dicta! Magnam rerum beatae harum perspiciatis
          consectetur? Suscipit a ipsum perspiciatis in soluta ullam dicta
          tenetur nostrum optio. Nihil, est. Doloremque recusandae quo in eos
          sit earum, pariatur sed vel nemo numquam, alias error maiores
          temporibus commodi. Dolores facere nesciunt, corrupti non deserunt
          reprehenderit, vel in exercitationem assumenda, rem esse veniam
          distinctio ex maxime. Optio voluptates ab, esse facere harum eligendi,
          impedit ex nemo unde placeat autem? Laudantium eveniet est sunt optio
          distinctio? Molestiae perferendis accusamus cumque, minus doloribus
          perspiciatis. Delectus ipsum, inventore reprehenderit quod veniam
          numquam, repellat omnis esse vitae minus placeat voluptates illo
          debitis dolores. Obcaecati dolores, iusto alias libero amet nam?
          Dolorum quae excepturi tempore aperiam voluptates sequi animi unde
          veritatis temporibus iure quod deserunt, delectus, aliquid, maiores
          deleniti dolores necessitatibus ut debitis alias! Error reprehenderit
          laboriosam dolores fugit ullam exercitationem ipsum voluptatem enim
          esse cumque possimus veritatis odio repellat maiores culpa soluta sint
          quas, natus iste sapiente. Tenetur hic fugiat obcaecati facere
          ratione! Eligendi ut provident dolorem at recusandae nisi magni
          soluta, odio quisquam natus quaerat eaque iure repudiandae aut atque
          tempora, aspernatur ullam quis facilis non voluptatibus quod. Cumque
          adipisci deleniti quos.
          <Outlet />
        </main>
      </div>
      <Routes>
        <Route path="/nav" element={<div>Navigation</div>} />
      </Routes>
    </>
  );
}
