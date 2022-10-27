import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Home.scss';

const Home = () => {
  const [ScrollY, setScrollY] = useState(0);
  const [ScrollYActive, setScrollYActive] = useState(false);

  const menuText = () => {
    if (ScrollY > 120) {
      setScrollY(window.pageYOffset);
      setScrollYActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollYActive(false);
    }

    console.log('Welcome to my site!');
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', menuText);
    };
    scrollListener();
    return () => {
      window.removeEventListener('scroll', menuText);
    };
  });

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-section1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            dicta officia inventore iure voluptate officiis illo ducimus natus
            magnam consequatur qui quos ad libero, illum dolor ex. Similique
            exercitationem porro commodi quasi repellat ex maiores totam. Ipsum
            inventore soluta error consequuntur perspiciatis enim ipsa iste odio
            at, repellendus nemo, vero eaque, mollitia hic maiores reiciendis
            architecto earum praesentium culpa aliquam voluptatibus fuga
            assumenda ullam! Quis provident aliquid deleniti iusto, aliquam
            molestias voluptatum odit cum commodi maiores praesentium sunt eaque
            aut eum ratione quas, in repudiandae dolore maxime? Ipsam eaque eum
            facilis, id impedit, neque quidem est quo eveniet rem eligendi
            mollitia fugit. Quia dolorum temporibus assumenda voluptates omnis,
            ducimus ut consequatur debitis error consequuntur? Modi odit placeat
            assumenda laboriosam, culpa repudiandae aspernatur omnis
            accusantium, sapiente suscipit earum sit, molestias pariatur
            recusandae facilis repellendus fugit at possimus. Vitae reiciendis
            iusto doloribus, soluta modi rerum qui veniam quos quisquam hic,
            tempora laboriosam eius nisi placeat illo similique blanditiis quam
            adipisci. Nulla accusantium omnis consectetur amet minus minima
            facere officiis quam nihil maxime, cumque praesentium. Facilis at,
            eum dolorem fuga itaque consectetur animi dignissimos iure vitae cum
            dolorum nam magni asperiores vel voluptatem nulla, enim aperiam
            molestiae non porro explicabo necessitatibus officia deleniti
            accusamus. Nam voluptates quis, voluptatum debitis nihil tenetur
            consequatur, hic sunt molestiae distinctio incidunt sint omnis
            facere aspernatur, quam unde ipsum quia illo fugiat eum iste! Dolore
            itaque impedit ex veritatis error, eaque atque cupiditate dolores
            adipisci amet illum voluptatem blanditiis, voluptatibus odio
            molestiae. Fugiat adipisci, dolore voluptas ratione at iusto alias.
            Vitae voluptas ut illo dicta qui doloribus quos tempora ducimus
            perferendis, reprehenderit fuga deserunt unde. Rerum sint dicta
            cupiditate quae suscipit reiciendis. Nihil odio, laboriosam dolorum
            architecto totam, blanditiis ullam eos nesciunt fugit ea rerum, sint
            explicabo! Odio assumenda harum qui mollitia. Consectetur fugit,
            officia distinctio nam natus dolor odio? Libero aperiam maiores
            voluptatem voluptatibus accusamus inventore facere corporis rerum
            tempore tenetur, provident veniam ea, temporibus repudiandae tempora
            explicabo repellendus in delectus modi quos. Dolore, quaerat. Omnis
            quidem doloribus ipsa debitis. Animi suscipit unde ea nihil adipisci
            obcaecati dicta laborum labore voluptatibus distinctio laboriosam
            magni, eius cupiditate quisquam harum quibusdam beatae, debitis
            voluptates quis nostrum illo. Delectus libero, voluptates iure
            numquam iste quia itaque corporis minus mollitia cumque esse placeat
            eligendi est minima. Excepturi id officiis consectetur suscipit quam
            corrupti repudiandae perspiciatis soluta eaque culpa enim iusto,
            aliquid reiciendis ipsa voluptate dicta necessitatibus architecto
            animi at quo obcaecati expedita aliquam! Corrupti praesentium eum
            veritatis repellat reprehenderit numquam exercitationem iusto libero
            similique cum illum possimus et totam nam in, error rerum pariatur
            autem tenetur ducimus eligendi necessitatibus. Quam assumenda,
            tenetur dolorum impedit neque totam quos, qui maiores dolores odit
            vitae corrupti cum sit quas atque. Aspernatur earum voluptatum
            fugiat dolor dolorum voluptate nesciunt, quam expedita rerum
            assumenda ipsa. Odio et ratione perspiciatis sequi! Inventore est
            sunt, culpa odio ab in rerum deserunt fugiat, error, maiores
            distinctio! Amet sint id provident accusantium debitis dolores
            delectus odio, nulla animi nisi deserunt velit esse dolorem
            perspiciatis molestias voluptatibus numquam rem nihil dicta nostrum
            voluptatem harum libero? Exercitationem quaerat aperiam dolorem
            corrupti est necessitatibus nostrum eveniet consequuntur quidem!
            Facere porro, ad recusandae ratione tempore voluptas magnam rem
            maiores commodi quas nulla, ab repellat labore doloribus numquam cum
            aliquid id maxime architecto esse temporibus at. Nesciunt porro
            necessitatibus nisi repellendus dignissimos quod pariatur enim
            sapiente vel neque deleniti, debitis excepturi ullam cum inventore
            aperiam, ab quaerat aut, ipsa atque voluptatibus! Voluptatum,
            laudantium harum pariatur facere impedit numquam culpa et labore
            quis consequatur dignissimos suscipit sit saepe reiciendis inventore
            magni autem unde veritatis aliquid maiores officia? Ipsam placeat
            itaque ullam dolor corrupti est quidem. Nam non quo neque quibusdam.
            Culpa velit nulla quidem molestias itaque pariatur nam aliquid, esse
            sit magni illo omnis molestiae fuga ad accusantium non possimus
            numquam voluptas repudiandae tenetur recusandae enim ipsa, expedita
            vero! Impedit suscipit nesciunt officiis molestiae harum
            reprehenderit accusamus nisi saepe ut quidem aperiam laborum ducimus
            laboriosam quia dolores, totam aliquam, voluptatibus repudiandae
            animi voluptates sunt culpa ex quaerat. Ullam aliquam perspiciatis
            magnam mollitia, beatae consequatur iusto, alias deleniti non
            temporibus sapiente similique obcaecati? Molestiae, laborum facilis
            eaque dolorem quaerat quam quod expedita culpa voluptas doloremque
            quas assumenda, nesciunt non reprehenderit omnis sapiente quos ipsa
            eum? Corporis, neque omnis officiis, perferendis illum ipsum iusto
            illo pariatur, quos ullam atque quod? Accusantium aliquid natus
            error porro eaque aspernatur esse dicta inventore ad labore neque
            deserunt, reprehenderit iure harum nemo recusandae velit iusto
            obcaecati ipsam rerum ab beatae quidem incidunt! Asperiores totam
            ipsum natus pariatur blanditiis id iste nemo? Illo, distinctio?
            Expedita, aspernatur, natus est assumenda nobis blanditiis
            consectetur reprehenderit beatae corrupti nemo sequi, aliquid optio
            qui deleniti voluptas? Distinctio cupiditate accusantium iste
            doloremque, alias eos modi quos reiciendis est voluptas, labore
            exercitationem. Corporis laborum perspiciatis laboriosam quod at?
            Dignissimos natus quos in et necessitatibus ipsam aperiam nesciunt
            voluptatem modi, enim saepe unde eaque facere maxime odit quae.
            Soluta, possimus cumque, similique veritatis illo provident ullam ad
            pariatur aliquid mollitia harum. Nulla ipsam excepturi dignissimos
            nam nihil aspernatur minima. Incidunt laboriosam a cumque natus at
            totam reprehenderit nulla sit expedita perferendis commodi facere
            molestiae recusandae iusto porro nam cum vero, consequatur mollitia!
            Provident necessitatibus sequi quod ea odit, ad, mollitia beatae,
            reiciendis cum eius nesciunt soluta rem autem explicabo quos quam
            veniam molestias? Quibusdam fugiat voluptate doloribus adipisci
            facilis voluptas nulla quia inventore voluptates blanditiis vitae,
            dicta velit eveniet porro dolorum earum autem? Nobis vero, cumque
            inventore minima quasi quos deleniti velit assumenda eos delectus,
            fuga qui neque optio ipsa quis soluta et ratione magnam illum saepe
            enim corrupti iusto. Modi quaerat dolorem mollitia ea eum optio
            blanditiis, deserunt veritatis harum ad perferendis sequi aliquid, a
            aspernatur reiciendis inventore vitae? Quas ex praesentium,
            temporibus voluptate blanditiis, corporis eius nesciunt atque eos
            deleniti laudantium maiores deserunt aspernatur rem itaque suscipit
            amet incidunt earum sed, voluptatum cupiditate molestiae ab. Maiores
            natus commodi facilis! Inventore architecto natus nisi, voluptas
            nostrum ad quos eveniet enim totam optio, eius repellat! Omnis
            mollitia quo labore architecto dolor accusamus excepturi officia
            fugit itaque, quis recusandae rerum nisi voluptatem, consectetur
            libero earum. Eum excepturi earum distinctio sit quis optio dolor,
            ipsa quidem autem ratione ex, aperiam provident. Illum eius
            repellendus eligendi consequatur nemo, fuga atque, architecto fugit
            qui explicabo assumenda aliquam saepe cum accusamus earum? Illum
            ducimus qui dolores suscipit vel at repellat est mollitia provident
            voluptatum aspernatur esse numquam cumque ab in et laudantium
            voluptas omnis consequatur, odio aperiam nemo error nesciunt
            distinctio. Quidem corrupti corporis, minus ipsa necessitatibus
            beatae dolores facilis aut, voluptatibus harum tenetur, hic earum.
            Pariatur animi odio deleniti magni praesentium in ut id, nobis
            distinctio laborum veritatis nihil officiis qui, facilis facere nisi
            consequuntur ratione? Aspernatur inventore et accusamus quod vero
            voluptas, dolor, eum veniam facere earum repellendus, facilis
            voluptates blanditiis obcaecati a laudantium ratione placeat
            excepturi rerum. Magnam iste, hic neque, laborum tempore explicabo
            in atque dignissimos dolorem distinctio suscipit ut consequuntur
            iure unde, ex ad facilis eligendi nisi nulla excepturi provident
            possimus. Nostrum vitae quia commodi eligendi magnam quasi unde
            nulla illum temporibus illo impedit ratione in tempora ex rem ipsam
            odio consequuntur nesciunt, itaque aperiam. Voluptatem fugit eaque
            dolore praesentium possimus atque laboriosam ipsa, accusantium hic
            doloribus quis eius commodi labore velit dolores ut aliquid sapiente
            eum error ex doloremque? Quae aperiam quos optio totam dolorum rem
            temporibus maiores atque ratione doloribus, nobis officiis
            consequuntur in alias sint cumque. Similique officiis sequi eveniet
            earum, adipisci est itaque nobis, iusto, reiciendis ex sint.
            Voluptatem laborum tempore at assumenda, saepe voluptatum distinctio
            facilis praesentium suscipit beatae, enim odio culpa vero quibusdam,
            voluptates dicta sapiente velit. Labore excepturi libero nulla
            quisquam animi tempore. Vel rem doloribus autem eius ipsa eaque
            aliquam blanditiis nisi officia. Ratione laudantium repellendus
            dicta placeat voluptates reiciendis, commodi cumque recusandae hic,
            perspiciatis tempore harum ullam saepe similique qui laboriosam
            dolor quas eum doloremque sunt velit blanditiis illum quam. Optio
            cumque aliquam alias omnis perspiciatis laudantium est neque
            delectus aut, eius distinctio quam sequi repellat earum fuga
            voluptas quos aspernatur explicabo dolore minima quis. Ab quas
            necessitatibus quos asperiores consequuntur, nisi cumque repellat
            sed reiciendis consequatur dolor cum repudiandae. Libero fuga,
            dolorem, alias ullam corrupti voluptates illo provident vel
            repellendus consectetur pariatur necessitatibus ducimus? Ex quo odio
            eius nemo nam ut officia cupiditate ipsa voluptate, blanditiis
            consequatur! Praesentium delectus saepe deserunt, dolorum itaque quo
            eum minus assumenda vel! Dicta, fuga! Ut, velit. Laborum ab at omnis
            recusandae, alias eius quae quis cum in itaque officiis eligendi vel
            est, earum ipsa illum corrupti repellat veritatis veniam
            exercitationem aliquam ipsam molestias. Ducimus velit assumenda
            explicabo molestias, iste itaque ipsam quibusdam ipsum fugit hic
            quasi nam, inventore, architecto doloremque exercitationem? Ipsam
            officiis explicabo quasi iste aut magni, impedit quidem molestiae
            reiciendis cumque nulla consequuntur facere velit libero suscipit
            dolorum, tempora doloremque. Dolore quis sequi ipsa deserunt unde
            eligendi mollitia ducimus dicta, voluptatibus tenetur ex, enim
            cumque porro possimus magnam minima neque? Expedita quibusdam amet
            numquam, blanditiis maxime, ut quo minima doloribus rerum enim
            exercitationem unde accusantium natus autem. Accusamus similique
            deleniti, ab nesciunt quae id! Reprehenderit perferendis minus
            voluptatibus ut, corrupti ducimus distinctio eius tenetur explicabo
            omnis similique soluta aliquid inventore neque odit modi laborum cum
            delectus nesciunt iure! Officiis dolore at laboriosam perferendis
            assumenda. Odio, obcaecati voluptatum perferendis ad quam vero
            tempore incidunt animi, amet cumque debitis maxime doloribus.
            Numquam laboriosam doloribus placeat consequatur ipsa quo iste
            tenetur possimus, hic aspernatur, et, repellat error ea iure
            asperiores nulla! Esse reprehenderit laboriosam amet, nostrum magni
            iste voluptatibus rem tempore consequuntur assumenda facere
            quibusdam vitae? Fuga provident eaque ea neque ipsa sapiente id
            dolores voluptatibus quis ullam nisi illum facere aspernatur, sed
            magni natus reprehenderit ducimus voluptates amet aperiam molestiae
            sunt numquam corrupti sint. Aperiam magni libero voluptates unde
            error, quos et veniam temporibus magnam quaerat architecto velit
            sint, quae, laborum minima pariatur doloribus ab. Optio magnam
            consequatur dicta, est repellendus perferendis provident eius
            assumenda quibusdam minima! Accusantium doloremque placeat
            temporibus unde? Possimus odio ea atque at, quia quos doloribus
            velit ad obcaecati voluptates animi tempore inventore earum veniam.
            Tempore libero at accusantium distinctio deserunt esse similique
            odio quos obcaecati quidem. Est labore adipisci facilis repellat
            impedit asperiores maiores optio, ratione ducimus ad cupiditate
            nemo! Nobis blanditiis quo accusamus, tempore nemo natus fuga vel
            non pariatur culpa corrupti aliquam nesciunt illo reiciendis?
            Numquam similique quibusdam assumenda corporis enim necessitatibus
            sed nulla cum mollitia? Minima non quidem aliquid. Perferendis sint
            quaerat, neque unde voluptates ullam dolorem dolor voluptatem! Sint,
            beatae corrupti ipsam eum necessitatibus suscipit quisquam a nulla
            veritatis voluptatibus aspernatur maiores sunt sed animi iure sequi
            voluptate et voluptatem sapiente praesentium iste ut, voluptatum
            culpa? Vitae fugit temporibus eius assumenda nam officiis
            voluptatibus placeat est alias hic necessitatibus quibusdam ad
            aspernatur, et autem nulla quos, commodi asperiores adipisci
            perspiciatis, neque quidem nesciunt excepturi! Tempore quas magni
            doloribus dolore est ullam reiciendis, nesciunt inventore expedita
            repellat voluptate id nemo, molestias fugiat dicta earum. Ad ipsa
            odit earum saepe, voluptates modi culpa non nobis? Perspiciatis
            debitis reprehenderit sapiente repellendus, veniam eligendi
            dignissimos eos asperiores velit voluptatem alias et! Magnam totam
            nesciunt explicabo, similique corrupti reprehenderit quaerat modi!
            Praesentium debitis harum est neque natus, rerum quis quas ullam
            sunt dolores facilis sit autem voluptatibus eum repellendus et ab ut
            saepe hic possimus eaque delectus. Aliquam itaque similique quod
            cumque laborum explicabo maiores quidem maxime repellendus
            obcaecati. Deleniti perspiciatis consectetur nostrum ratione,
            inventore veritatis natus ducimus tenetur eum dolore dolor. Natus
            impedit inventore eos cupiditate delectus, unde debitis
            necessitatibus ut distinctio tenetur est excepturi nemo rerum
            accusantium ipsam at rem nobis voluptates vitae voluptas. Doloremque
            placeat dicta eligendi autem, minus quaerat necessitatibus dolores,
            eos possimus voluptate quo unde blanditiis porro officiis hic.
            Eveniet officia in, velit aliquid sit possimus doloremque ea
            delectus explicabo perspiciatis molestiae quidem ipsa autem maiores
            adipisci et ducimus facere corrupti? Eveniet neque nobis consectetur
            tempore voluptas officiis placeat voluptatem sit dolores. Saepe
            facere nulla neque nesciunt iste fugiat labore voluptates
            consequatur. Eaque soluta dolore similique debitis, molestiae
            asperiores vitae esse labore laborum, commodi quia a repellendus
            molestias possimus, maxime distinctio rem. Totam, nulla veritatis.
            Error earum distinctio facilis porro illo, nobis quas similique nam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
