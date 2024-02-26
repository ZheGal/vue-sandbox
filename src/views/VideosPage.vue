<template>
  <div class="videos-page">
    <div class="videos-inner">
      <div
        class="video-player"
        @wheel="handleScroll"
        @mouseover="onMouseOver"
        @mouseleave="onMouseOut"
        ref="videoPlayer"
      >
        <video
          ref="videoObj"
          :src="videoSrc"
          :volume="volume / 100"
          autoplay
          class="video-obj"
        ></video>
        <input
          type="text"
          ref="keyboardControl"
          readonly
          @keydown.up="handleKeyVolumeUp"
          @keydown.down="handleKeyVolumeDown"
          @keydown.right="handleKeyVolumeUp"
          @keydown.left="handleKeyVolumeDown"
          class="keyboard-control"
        />
      </div>

      <div class="controls">
        <button @click="toggle">Go Fullscreen</button>
        <record-button :video="videoObj" />
        <div class="volume">Volume: {{ volume }}%</div>
      </div>
    </div>
  </div>

  <div class="bottom">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius illum,
    corporis quas quasi deleniti vitae. Nemo neque explicabo reprehenderit
    dolorem consequatur cum similique fuga assumenda. Sapiente odio tempore
    adipisci a. Magnam earum libero cumque, autem unde enim hic aliquam
    reprehenderit neque nulla, accusantium quidem fuga quisquam dignissimos
    doloremque eaque soluta laboriosam! Officia, facilis? In blanditiis incidunt
    placeat, esse delectus fugit. Tenetur, veniam in facilis nihil consequatur
    itaque eius non quis obcaecati asperiores quas natus, modi omnis, aspernatur
    dicta inventore aut quibusdam minus beatae incidunt sint explicabo? Aperiam
    quisquam accusamus ducimus. Beatae eius est nemo fugit, temporibus nesciunt
    qui repellat! Asperiores repellat delectus dignissimos saepe. Temporibus quo
    praesentium doloremque culpa quis, obcaecati adipisci sunt eius similique
    repellendus esse pariatur? Deleniti, eveniet. Explicabo vero ex qui quidem
    porro repellendus sequi laborum reiciendis nam corporis alias voluptatibus
    vel repellat ipsa nostrum quaerat ea sed ut suscipit voluptas, harum enim
    eum id beatae. Assumenda? Iusto, architecto aperiam nam accusamus numquam
    enim voluptas voluptates labore molestias animi eos quas, hic id.
    Reiciendis, non eaque neque, ratione dicta optio aliquid velit nesciunt
    beatae, perferendis ab voluptates. Cupiditate atque excepturi nobis culpa
    commodi, necessitatibus laudantium odit, adipisci doloribus soluta esse
    minima cum veritatis praesentium iste expedita, at dicta porro unde
    accusamus quo? Quo dolor quia minima nostrum. Reiciendis inventore,
    voluptate nihil rerum ex ab! Est ut fugiat illo nam eaque, voluptate,
    adipisci ab totam praesentium fugit eligendi, ad vitae laboriosam molestias
    eos inventore repellendus provident necessitatibus. Quis. Culpa distinctio
    dicta adipisci nobis repellat beatae odio vero ut impedit minus reiciendis
    est perferendis, tenetur quas iste hic sint illum voluptas quis. Hic culpa
    deserunt est deleniti pariatur vel. Quo dolor voluptate voluptates ab, odit
    atque eligendi veniam animi tenetur ipsa, sit debitis veritatis non vel ea
    quas illo. Sunt hic esse nobis suscipit excepturi, rem voluptates. Magni,
    dolore! Voluptatum ad aliquid hic non, debitis neque veniam sit, distinctio
    corrupti accusantium sed libero repudiandae mollitia sequi quod excepturi.
    Corrupti porro ipsum itaque beatae expedita aspernatur aperiam obcaecati
    voluptatum laboriosam! Magni reprehenderit repellat, vero nisi aut modi
    pariatur sint quod molestias vitae. Nulla corporis obcaecati autem
    praesentium dolore odit quasi, ut voluptatibus consectetur in dolorem
    perspiciatis velit, culpa id pariatur! Voluptatum in culpa distinctio ipsam
    dolorem est aliquam eveniet exercitationem voluptatibus repellat at
    cupiditate illo autem eum unde nesciunt sequi aliquid saepe dignissimos,
    nisi commodi. Harum quaerat similique esse beatae! Fugiat dolore rerum
    pariatur, sit quaerat quod magnam autem asperiores tenetur recusandae,
    sapiente, accusamus accusantium officiis iusto. Assumenda vitae beatae
    labore cum, harum ad aliquam dignissimos dicta facilis quibusdam eum? Nobis,
    eveniet. Itaque eius nam provident corrupti. Cupiditate, ad facere. Sed
    harum commodi necessitatibus unde, illum rerum inventore ipsam aliquam
    dignissimos odio rem veniam possimus magni soluta porro labore quasi! Nisi
    aspernatur ab ducimus fugit commodi accusamus! Ad voluptatum optio molestias
    ratione fuga ullam dolorum! Fugiat animi deleniti, officia quam nesciunt
    itaque, quaerat similique totam aliquid exercitationem distinctio labore ut.
    Deleniti tenetur pariatur asperiores quos obcaecati cum, fuga, quia minima
    mollitia quibusdam consequuntur perspiciatis eveniet cupiditate optio
    impedit rem quas accusantium dolores ut porro! Sed, dolor voluptate! Iste,
    at enim. Id at veritatis numquam soluta impedit illum quisquam asperiores
    eaque nostrum possimus laborum voluptatibus natus, perferendis dolorem
    accusamus, deserunt ipsa aperiam aut voluptates debitis! Excepturi nostrum
    explicabo eum facere consequatur. Esse nam laudantium vero ipsam commodi
    maiores dolores saepe quidem nostrum! Incidunt voluptatum nam excepturi enim
    itaque culpa sit. Ex exercitationem maiores necessitatibus tempore sed animi
    quam, libero nostrum unde. Alias rem facilis temporibus nam harum sapiente
    expedita qui tempore necessitatibus itaque non commodi dolorum at,
    voluptatibus quam praesentium magnam minus atque illo explicabo in doloribus
    asperiores et. Corporis, labore. Beatae recusandae sit quaerat at corporis
    explicabo dolor animi voluptates eos fugiat eum cupiditate, veniam obcaecati
    libero quibusdam temporibus exercitationem quas nostrum. In, deserunt?
    Delectus optio doloribus quisquam facere alias! Inventore repellat alias
    molestiae quas est perspiciatis adipisci maxime sapiente at id doloribus
    harum eligendi, magni corporis hic dolorem impedit quaerat exercitationem
    tempore ipsa architecto animi maiores, dolor cumque! Ex. At ratione dolores
    maiores delectus voluptas corporis tenetur, fugit consectetur fugiat
    repudiandae nemo? Dicta voluptatum possimus, rem sunt vitae quisquam nulla
    magni eos cumque fugiat libero provident dignissimos aliquid corporis! Rem
    explicabo debitis veniam nobis illum enim, perferendis molestias ducimus
    dignissimos quas libero perspiciatis facilis earum eum quod nisi! Molestiae
    minima in vero, optio rerum exercitationem. Hic qui et doloremque? Deserunt
    ratione officiis hic tempora illo quam magni? Repudiandae nihil voluptatibus
    veniam sunt, ipsam at esse similique dolorem atque odit deserunt earum, sit
    quidem veritatis nam quibusdam magni iusto fugiat. Perferendis laboriosam
    vitae veritatis nihil temporibus, deserunt laudantium eaque harum ullam,
    saepe repellat consectetur illo aliquid blanditiis odio sit asperiores
    labore consequatur, quibusdam commodi mollitia? Ex ratione maiores quisquam
    ab? Id tempora ullam temporibus, dolores amet eos voluptatem architecto
    consequatur aperiam harum dolorum vel, iusto voluptates beatae corrupti
    dolorem quas officiis earum, assumenda maiores quis a deserunt quod! Eaque,
    placeat! Repellendus quo maiores officiis, itaque harum fuga quaerat eos
    doloremque ex eius quod reiciendis optio obcaecati ad placeat recusandae qui
    provident deserunt suscipit quam beatae iure adipisci autem? Architecto,
    voluptate. Excepturi perferendis, ea ab, laboriosam voluptatibus, veniam
    officia delectus quia dicta harum possimus voluptatum. Iure quae deleniti ad
    laboriosam autem, voluptas laudantium fugiat at nemo suscipit, veritatis,
    porro provident repudiandae. Totam facilis deleniti saepe commodi magnam
    nemo consequuntur a facere, natus non numquam sint cumque iure placeat
    doloribus eligendi explicabo veritatis? Sequi id rerum quam provident
    doloribus quasi assumenda suscipit. Ullam vitae, adipisci laborum
    exercitationem nemo officia cumque nihil commodi vero iusto perspiciatis
    culpa itaque aspernatur debitis hic molestias suscipit quasi repudiandae
    expedita odio consequatur sint? Quae rem delectus aspernatur? Minus cumque
    quia quas earum nemo exercitationem dolorum nisi nihil molestiae animi
    perferendis iste dicta assumenda facilis, sit doloremque distinctio
    consectetur molestias ut aliquam quidem, sequi ab. Qui, animi autem? Culpa
    doloribus repellendus recusandae eius optio odio delectus consequatur! At
    atque iure repellendus sunt dolorum expedita a. Ducimus error qui voluptate,
    nam laudantium ratione iusto assumenda possimus provident explicabo
    molestiae? Velit rerum libero temporibus id quidem rem ipsam sunt? Expedita
    suscipit aliquam odio voluptatibus ipsum totam et iure debitis ullam quo
    voluptatum corrupti, eligendi fuga aliquid ab distinctio nihil accusantium!
    Id dignissimos laborum, deserunt ea consectetur aut autem. Soluta, tenetur
    dolores laudantium molestiae facilis officiis, quisquam quas quia maxime
    cupiditate ut debitis, velit tempore cumque consectetur. Rerum unde
    doloremque illum. Exercitationem soluta voluptates illo minus velit.
    Corrupti minima eveniet, asperiores repellat ex tenetur distinctio! Itaque
    magni, eum explicabo enim sapiente doloremque et eius beatae aliquam,
    officia quod commodi quae nobis! Minus debitis enim pariatur sapiente
    tenetur. Deleniti eligendi reprehenderit nulla, ex iste id atque non
    doloremque alias sapiente, qui hic iure explicabo quam totam voluptates
    delectus quia, voluptate blanditiis quo! Temporibus, veritatis illum non
    fuga ipsum blanditiis perspiciatis ullam nam natus amet a error quisquam
    corporis dolorem deleniti animi architecto deserunt nisi voluptatem numquam
    eligendi dignissimos dolorum vitae aliquam. Ad. Praesentium ab perspiciatis
    voluptatem, blanditiis ex natus et! Earum odit doloremque omnis deleniti
    possimus amet nemo laboriosam tenetur, blanditiis eius quae atque, soluta
    voluptatibus maiores ducimus, dolore voluptate nam. Tempore? Repudiandae
    possimus doloremque molestiae optio, magnam quaerat quidem earum
    necessitatibus, voluptatem distinctio aliquid odit nemo iste quam eveniet
    sequi expedita harum inventore ratione soluta. Voluptatum unde fugit
    accusantium nisi architecto! Tempore qui eaque nesciunt error alias,
    repudiandae molestias temporibus iusto earum dolor voluptates facilis in
    aspernatur quae dicta quibusdam, aliquam perspiciatis sit ut cum debitis
    esse. Fugit pariatur earum eaque. Hic incidunt, officia officiis nisi
    ratione dignissimos est nesciunt fugiat impedit minus quam iusto vel porro
    explicabo aspernatur veniam! Numquam laboriosam dicta sapiente, corporis
    rerum laborum molestias voluptates veritatis aut! Magni rerum ipsa eligendi?
    Nostrum sequi modi vero veritatis placeat doloribus ullam itaque dolorum
    officiis ipsam sit cupiditate et, quia eos explicabo voluptatum saepe
    aperiam necessitatibus excepturi tempora illo temporibus. Sit rem cumque
    voluptate maxime rerum dicta veritatis ratione eaque laboriosam quam dolorum
    quisquam, voluptates qui est a? Dolorum explicabo maiores nihil. Totam, iste
    inventore sequi maiores debitis deserunt rerum! Perspiciatis doloremque
    error libero velit modi expedita blanditiis quasi, maxime eius aperiam
    pariatur rem necessitatibus earum architecto sit, cum ipsam nobis. Quaerat
    officia pariatur saepe aut a numquam sunt illum? Iure id a voluptatum natus
    hic! Aliquid quos eveniet nulla hic nesciunt dolorem beatae in tenetur earum
    labore quasi, totam sunt ullam ducimus repudiandae nam veritatis ipsam
    repellendus est facilis! Ad laboriosam earum doloribus nihil corporis,
    adipisci voluptas suscipit quisquam minus porro, consequuntur asperiores ut
    quos similique possimus facere quis nostrum nemo fugit? Non ad vitae sequi,
    quidem laudantium debitis? Placeat accusantium facere beatae vel soluta
    sequi provident tempora rem, tenetur laboriosam omnis enim tempore! Aliquam
    quas quisquam dignissimos magni unde eaque debitis ipsum consequuntur,
    quaerat nostrum soluta facilis nihil! Provident, fuga ipsam natus non harum
    itaque velit maxime unde adipisci expedita sit dignissimos quae at dicta
    aspernatur, autem, dolor ad eius perspiciatis ab distinctio laboriosam iure.
    Dolorem, placeat ducimus. Fugit quidem architecto corrupti deleniti!
    Laudantium distinctio vitae aspernatur expedita ratione cumque est dolore
    minima fugit, perferendis reprehenderit! Dicta laborum debitis facilis neque
    eligendi culpa omnis mollitia repellendus odit sit? Accusantium totam
    quisquam repellat possimus, necessitatibus quas fugit qui atque nemo
    molestiae ea minus vero quis distinctio, repudiandae, expedita voluptatibus.
    Aut magni culpa fugit officiis quasi ipsam, natus tempora enim! Repellendus
    odit consectetur voluptates ut, eaque exercitationem, laborum labore alias
    fuga, blanditiis quos placeat culpa inventore nulla cupiditate nemo? Dolore
    earum eos omnis quam atque molestias iusto unde accusantium pariatur.
    Cupiditate eligendi, libero repellat corrupti quia laboriosam laborum aut ut
    corporis provident temporibus quas sunt atque, aliquid impedit repudiandae
    nesciunt nisi labore a officiis. Esse, voluptatem facilis? Nobis, vero modi!
    Iure alias natus ipsa consequatur. Sed voluptatibus aliquam ipsam ex debitis
    quisquam iste voluptates illum animi ab et quas, recusandae asperiores
    eaque. Officiis sapiente dicta ut quos enim, labore odit! Modi fugiat
    cupiditate labore voluptatem exercitationem debitis quam, similique beatae,
    blanditiis non nulla, voluptate id adipisci facilis consequuntur maxime?
    Minus dolores delectus sequi. Ipsum at assumenda facere placeat perferendis?
    Aut! Aspernatur ipsam dolorum delectus illo totam, debitis itaque, pariatur
    rem maiores exercitationem, mollitia possimus deleniti? Ratione, temporibus
    accusantium voluptatem laborum ex molestias. Debitis eligendi labore,
    reiciendis deleniti dignissimos iusto ipsa. Doloremque illum delectus, alias
    est et nostrum. Nesciunt magni error provident voluptatum. Reprehenderit
    expedita ipsum consequuntur facere, unde delectus? Similique tempora rerum
    facilis quis autem corrupti animi hic aspernatur reiciendis? Adipisci, unde
    cumque labore inventore quia rerum cupiditate natus perferendis, eos numquam
    officia reiciendis error odio excepturi possimus nostrum, vero atque ipsa
    nulla alias. Odit veritatis incidunt reiciendis nesciunt ducimus. Laboriosam
    necessitatibus quasi reiciendis, quod ut, fugiat eius molestias corporis
    repellendus consequuntur vel facilis consectetur aliquid ullam dolorum
    aspernatur animi neque repudiandae esse distinctio quisquam quas aliquam.
    At, repellendus. Excepturi! Cupiditate iure culpa doloribus iste ut dicta
    assumenda dolorem accusantium quod dolore, rerum obcaecati excepturi
    laudantium autem corrupti! Sint eos, quaerat consectetur aliquam illo rem
    voluptatibus dolor saepe corrupti pariatur? Enim quidem dolorem molestias
    officia! Inventore unde perferendis accusantium corrupti minima quisquam
    deleniti culpa labore cupiditate tenetur laudantium molestiae repudiandae et
    ducimus, sapiente ratione sequi natus error omnis excepturi quos? Incidunt
    natus suscipit quibusdam! Enim illum assumenda, id veniam est iure fugiat?
    Sed voluptatum delectus enim consectetur officiis rerum totam aut
    voluptatibus repellendus aliquam, debitis dolore quae quo suscipit
    distinctio. Amet eos explicabo nostrum. Iure, accusantium asperiores. Fugiat
    necessitatibus quasi labore impedit officiis eligendi, ullam at
    exercitationem rerum non autem ea reprehenderit sunt veritatis cum in fuga
    praesentium minima quod! Consectetur magni a, ad mollitia sunt saepe. Autem
    enim sint excepturi maiores quae reprehenderit sunt perferendis, magni quo
    repellendus, exercitationem pariatur optio! Praesentium fugit, nulla officia
    quasi dolores voluptate fuga! Ipsam voluptatem numquam dolore nesciunt ex
    minima reprehenderit quam porro vel rerum similique, assumenda explicabo.
    Eligendi, doloremque vero ipsum ipsam alias temporibus nostrum mollitia
    maiores. Dolorum incidunt harum facere deleniti! Culpa dolorum illum dolores
    architecto hic obcaecati molestiae id velit, nihil commodi voluptates
    debitis molestias, maxime vitae consectetur officia, aliquam sequi magni.
    Repellendus ab maxime maiores nulla voluptatem quod provident!
    Necessitatibus voluptatem sequi deserunt eaque asperiores recusandae
    inventore excepturi molestiae quod veritatis saepe alias, modi iusto aut
    consequuntur consectetur voluptatum quisquam cumque! Possimus excepturi
    molestias placeat reiciendis quo? Architecto, autem! Quis commodi aliquid
    fugiat natus possimus quisquam! Totam est illo vel dolorum praesentium,
    fuga, voluptatem labore unde enim officiis blanditiis. Sed necessitatibus
    cum corporis iure a, dolore exercitationem velit facilis! Ea corrupti omnis
    cupiditate saepe id quaerat optio magnam porro provident dolores officiis
    dicta ducimus deserunt, reprehenderit blanditiis odio officia est maiores
    tempore expedita voluptas quod excepturi! At, veniam officiis. Aut cum totam
    dolorum numquam, ullam asperiores quas quia modi animi ipsam possimus
    quibusdam repellat mollitia sit minima. Corrupti quibusdam provident
    repellendus similique possimus itaque temporibus fugiat eius, quasi vel?
    Pariatur provident, fugit blanditiis molestiae deleniti commodi obcaecati
    illo, quae praesentium repudiandae cumque neque? Vero nihil laudantium
    blanditiis rem fugiat dolorem harum aliquid voluptatem animi deleniti,
    quaerat, totam quas explicabo! Vitae maxime odit, voluptatum dolores tempora
    culpa eveniet! Deserunt quis fugit totam cupiditate minus laboriosam
    aspernatur sequi, eaque animi velit exercitationem voluptate explicabo alias
    cum, dignissimos ut molestiae, in id? Beatae hic nulla ad est veniam
    asperiores similique, ex consectetur, rerum impedit omnis itaque cum modi
    qui assumenda sint, ullam autem soluta dolorum. Provident nulla, accusamus
    unde laborum optio maxime? Rerum veritatis perspiciatis, temporibus tempora
    suscipit tenetur recusandae? Mollitia autem obcaecati dolore, sed molestias
    saepe excepturi commodi aut soluta nihil at ad quo! Nemo tempore inventore,
    error at veniam ea! Assumenda deserunt dignissimos maxime harum totam quidem
    eum soluta incidunt suscipit. Ipsum sunt quasi sapiente saepe autem
    inventore aperiam omnis libero nesciunt incidunt aut, molestias fugiat eius
    dolorem alias similique. Officia facilis deserunt unde aut expedita, sint
    rerum sequi laborum. Ducimus distinctio illum veniam rerum dolorum minima
    voluptatum delectus quos sequi neque. Aliquam explicabo amet hic aut,
    placeat voluptates a. Nam architecto beatae officia deleniti? At laudantium
    eligendi minima dolorum, aliquam autem beatae aliquid dolore iure deserunt
    neque vitae corporis sunt, harum voluptate obcaecati facere vel ab magnam
    nesciunt assumenda. Nam perspiciatis repellendus a ex neque eum architecto
    quasi cupiditate? Molestias molestiae impedit, earum facilis vero quisquam
    odit, cum, tempora corrupti quis exercitationem ducimus a corporis rem ipsum
    illo enim? Beatae magni ut voluptas eius perspiciatis quos et commodi atque.
    Accusamus, quos dicta ipsum, placeat atque officia quo ipsam nostrum vero
    aut ab. Possimus praesentium autem nihil cupiditate earum. Asperiores.
    Dolores commodi asperiores, aut exercitationem inventore, culpa impedit
    nihil sed aliquid reiciendis voluptas amet atque accusamus. Corrupti
    aspernatur rem, autem non quis illum debitis asperiores pariatur. Similique
    voluptate a odit. Impedit cupiditate et provident fuga veniam quaerat
    tenetur iste tempore animi ratione, officia dicta ab quos nulla blanditiis
    necessitatibus odit sequi ex aliquid molestias sit! Laborum, porro nesciunt.
    Mollitia, minus! Rerum, aspernatur sapiente, accusamus harum ullam corrupti
    earum quia ex voluptatum quisquam dicta provident sint fugit atque vitae
    quam! Reprehenderit veniam pariatur maxime dolorem ipsum totam nostrum
    nulla! Rerum, rem! Aspernatur excepturi nemo autem ipsum officiis sapiente
    error exercitationem nostrum neque sit magni a ab assumenda deleniti itaque,
    dolore possimus commodi dignissimos recusandae facere debitis quam quibusdam
    nisi soluta? Eos. Aliquid quam obcaecati sapiente excepturi. Explicabo
    labore doloremque aspernatur commodi nam iste voluptates exercitationem
    veniam vero, excepturi mollitia non id nesciunt, provident totam assumenda
    culpa praesentium. In consequuntur voluptatibus temporibus. Eos eum
    voluptatibus labore ex earum? Dolorem rem doloremque quae autem possimus,
    dolor, nam quibusdam vel eligendi aperiam ipsa, repellendus recusandae
    repellat beatae necessitatibus. Eveniet itaque rem ad inventore possimus.
    Doloribus consequatur blanditiis ratione aut? Fugit quae, ducimus
    perferendis aliquid eum quo, minima dolor voluptatibus officia numquam quam
    omnis? Iure facere, expedita minus esse saepe reiciendis aut vitae qui
    laborum. Expedita nam doloribus deleniti accusamus vitae quasi ducimus fugit
    voluptas odio quibusdam quod quaerat cumque maxime sapiente praesentium,
    repellendus reiciendis laudantium mollitia ab eligendi. Odit id sequi
    accusamus corporis ipsum. Totam voluptatem voluptate eos aspernatur
    perspiciatis consectetur unde temporibus molestiae? Iure sunt eligendi
    quibusdam alias nesciunt architecto corrupti id quidem assumenda magnam!
    Perspiciatis voluptatum eos laudantium illo consectetur eius odio. Doloribus
    culpa non beatae architecto est a, saepe, quod quia eius unde fuga
    perferendis fugiat! Voluptates hic quaerat soluta explicabo nostrum, illo
    nesciunt ex beatae nemo ea aut. Beatae, necessitatibus. Repellendus iure
    beatae id alias ut dolorum assumenda nemo harum voluptates distinctio
    dignissimos quasi error voluptatem magni recusandae perferendis voluptatum
    esse, sit veniam nam hic, sapiente temporibus voluptatibus? Suscipit, rerum?
    Eligendi temporibus, facilis aliquam quos voluptatibus provident nulla vitae
    nobis rem mollitia eius! Velit recusandae id quidem laboriosam autem
    dolorum. Fugit odit id enim quidem, impedit perspiciatis dolorum eum ipsa.
    Quod, tenetur voluptatum dolores quae dolorum eveniet laudantium id alias
    aperiam! Tempora enim temporibus non maxime quisquam? Atque ipsum itaque
    obcaecati eveniet praesentium ullam repellendus, veniam pariatur! Aliquam,
    odio ipsa? Voluptatem molestiae labore fugit illum natus dolore doloremque
    optio iste rerum explicabo sed soluta quaerat eligendi maxime consectetur
    odio quasi quae suscipit amet porro, atque repudiandae provident vel
    obcaecati. Qui! Molestias cupiditate officia iure culpa placeat at ab
    doloremque assumenda quaerat, harum dolorem quos quasi laudantium enim.
    Nihil nulla tenetur quo delectus repellat, voluptates itaque autem, error
    facilis reprehenderit earum? Commodi nesciunt unde quos fuga ducimus optio,
    maiores iste minus? Natus sapiente, autem ea ducimus doloribus veniam odit
    culpa rerum qui aut quidem tenetur, consequuntur soluta vel dicta nisi
    corporis! Delectus reiciendis illum ducimus esse optio, minus, explicabo
    similique quam saepe placeat tempora suscipit earum, minima illo. Delectus
    incidunt sunt impedit? Quis provident magnam obcaecati quia accusantium
    repellat sit laudantium? Qui sapiente nobis quas nihil laboriosam
    reprehenderit fuga nisi quod exercitationem aspernatur quis, natus saepe
    eius magni, commodi incidunt aut ut quisquam excepturi! Similique incidunt
    architecto sapiente cupiditate maxime quasi! Officiis facere saepe corporis
    sunt ab nesciunt quasi dolore? Obcaecati, odio debitis ab illo placeat ipsam
    laboriosam at molestias fugit accusantium doloremque iusto laudantium
    aspernatur sed est suscipit, atque ducimus! Ipsum molestiae ratione soluta
    quod placeat nemo quos, neque doloremque odit! Nesciunt tenetur,
    necessitatibus fuga doloremque veniam totam deleniti autem omnis eius, quam
    officiis iste labore nulla debitis perspiciatis velit. Incidunt ea similique
    dolorum soluta rem doloribus omnis dolores nesciunt maxime maiores ipsa
    laborum, impedit eos optio recusandae assumenda consequatur ipsum corrupti
    laudantium. Maxime dolor debitis explicabo voluptatibus atque similique?
    Facere hic molestiae eos animi odit sit nostrum beatae itaque aperiam
    facilis quibusdam numquam, aliquid asperiores veniam dolor possimus delectus
    alias, exercitationem eius dolorem tenetur, at cum incidunt! Aperiam, at!
    Est accusantium quod iure natus voluptates. Porro eos laboriosam deleniti
    debitis, atque illo sit saepe repudiandae praesentium tempora ullam eveniet
    soluta dolor quisquam quas aut, perferendis animi? Est, in perspiciatis.
    Minima, amet soluta. Ipsum impedit natus vero architecto praesentium eaque
    ea quidem, voluptatum veritatis! Deserunt exercitationem quia molestiae
    ratione amet laudantium sapiente quis nesciunt deleniti incidunt nobis
    repellendus, numquam ab! Dignissimos voluptatum quisquam est aliquam dolorem
    recusandae incidunt modi repellat facere assumenda, consequuntur sapiente!
    Consectetur quae incidunt architecto eaque quos illo suscipit omnis,
    temporibus nam praesentium perspiciatis, vero delectus consequatur. Autem
    rem iusto esse, quia optio at quae sunt sit ratione saepe molestiae
    similique ex dolorem perspiciatis nobis architecto molestias amet quo ab id
    atque odio aspernatur. Dicta, a molestiae. Blanditiis, corrupti cumque.
    Doloribus harum dolore inventore accusantium dicta aperiam quod laudantium
    ratione architecto eligendi, enim assumenda recusandae, ipsam obcaecati ut.
    Illo tempora repudiandae cumque debitis optio assumenda sapiente fugit. At
    ullam officia quam laudantium. Iste debitis tempore ipsum magnam quos maxime
    fuga corrupti, modi velit nostrum neque et ullam id dolor ab esse aspernatur
    dolorum quod eum dignissimos accusantium? Debitis unde, porro ab, est id
    ipsam eum enim amet rerum culpa officia dignissimos mollitia veniam hic
    quidem rem quas. Aliquid cumque cupiditate sint deserunt obcaecati quisquam,
    dolore repellat fuga! Voluptatibus, sequi distinctio inventore atque
    incidunt quo natus voluptas tempore voluptatum harum officiis, autem sint
    ducimus magnam, cumque in magni? Suscipit omnis dolorem porro consequatur
    hic architecto necessitatibus ducimus quis. Sapiente quas laboriosam
    cupiditate quis dolore deserunt adipisci nihil, velit, dolores distinctio
    veritatis suscipit illo inventore! Recusandae, alias autem numquam eius
    nobis saepe eligendi delectus atque, maiores voluptates accusantium! Quae.
    Voluptatum voluptas repellendus temporibus adipisci culpa, animi cum ea
    delectus iusto suscipit? Inventore doloremque nulla fugiat eligendi sint
    maxime alias tenetur a quod minus, quam voluptas saepe dolor! Illum, quod?
    Nam, dolorum sit, vitae quo esse temporibus inventore cupiditate ea sed
    excepturi asperiores itaque et at quidem reiciendis eveniet quibusdam ipsum
    eaque tenetur. Maiores corrupti, adipisci laudantium magnam reiciendis iure.
    Numquam neque itaque officiis nulla veniam amet ut reprehenderit sunt eum.
    Impedit quisquam pariatur molestias, explicabo repellendus, beatae neque
    reprehenderit atque eos ad aut vitae nostrum error sint, incidunt libero.
    Cum odit dolorem minima omnis id. Assumenda eveniet dolores vero id
    laudantium dicta excepturi repellat doloremque facilis aliquid nobis labore,
    soluta cupiditate, vel, amet culpa nam voluptatibus quas aut explicabo! A
    porro suscipit deleniti, ut necessitatibus cumque eos vero dolores placeat
    distinctio rerum nesciunt veritatis harum! Natus eveniet dicta tenetur.
    Neque, officia. Esse iure veritatis quis doloribus ipsam, reiciendis
    exercitationem. Repudiandae reprehenderit sunt ipsa. Perferendis eos quae
    officiis unde laboriosam consectetur? Quis, consectetur? Ducimus nesciunt
    quibusdam recusandae sapiente illum veniam a vel aut voluptatibus
    laboriosam, voluptate nulla earum eum id! Earum iure laudantium quis!
    Similique libero nisi natus ducimus illo perferendis quis placeat culpa
    laboriosam quae obcaecati facilis inventore rem consectetur voluptatem sunt
    id deleniti fuga delectus, est provident harum. Est, labore itaque
    aspernatur provident ducimus quae velit. Necessitatibus ratione nemo
    excepturi similique totam, numquam, voluptatum doloremque cupiditate, quis
    sed perferendis eligendi et nulla eaque hic unde corporis nam nisi. Id error
    quis, vero quo odio aliquam quibusdam, temporibus aliquid libero optio illo
    neque possimus, facere perspiciatis ea maiores. Maxime nesciunt fuga
    excepturi vel sequi itaque natus in, quis recusandae. Quasi, in qui
    voluptates voluptatem omnis quaerat nemo aut eveniet similique corporis.
    Modi illum ducimus voluptatem ullam commodi adipisci nobis officia soluta
    officiis! Sapiente dolorem dignissimos quam dicta minima eum! Excepturi
    molestias cum voluptatum praesentium. Incidunt odit officia saepe aliquid
    similique nostrum ad magni quidem reprehenderit impedit non doloremque
    possimus enim excepturi, eaque explicabo voluptas fugit, reiciendis aut.
    Aliquam, perferendis! Asperiores eos voluptates voluptatum explicabo,
    commodi et sapiente delectus expedita hic quasi illo vitae suscipit rem
    doloribus minus consectetur? Nemo, quam ipsam explicabo laudantium rem
    tempore quidem sapiente earum doloremque. Voluptatibus earum possimus unde
    velit non harum enim dolores corrupti fuga tempore mollitia corporis,
    nesciunt iusto. Distinctio nihil quibusdam, quo, porro aliquid maxime dolore
    nesciunt quis voluptatibus nulla sit rerum? Doloribus beatae sint rerum
    corrupti modi molestias? Iusto nemo maxime possimus a ab perspiciatis
    adipisci, voluptatem minima. Iste deleniti, facere rerum quam blanditiis
    magni quia accusantium repellendus totam placeat numquam. Harum dolorum
    corrupti nobis consequatur. Quibusdam nemo tenetur quas quisquam velit.
    Expedita odio recusandae at, libero molestiae quidem non quaerat,
    dignissimos delectus officia, exercitationem nesciunt totam! Nobis id
    architecto aliquam. Tempore neque magni consequuntur nam commodi ab!
    Quibusdam, blanditiis iusto reiciendis ab sunt inventore, molestias
    voluptatem libero ipsam, maiores doloremque! Facilis excepturi aspernatur
    reiciendis, quo natus aut voluptate eius neque? Blanditiis amet facere
    reiciendis cumque, molestias laboriosam quos architecto distinctio, vero
    ipsa, saepe pariatur qui. Nemo, consectetur doloremque in delectus minima
    magni beatae iure non expedita quibusdam pariatur deleniti sunt. Deleniti
    architecto reiciendis ipsum aspernatur temporibus rerum perferendis debitis
    vel quos explicabo doloribus quia quasi, quidem veniam, optio molestiae
    autem. Nisi numquam consectetur nihil tenetur, alias placeat fugiat
    obcaecati qui. Sint ad laudantium quaerat fugit mollitia vero, enim a
    aliquid iste quod, voluptates doloremque, doloribus quam qui repudiandae
    nihil corrupti soluta. Reiciendis ratione similique, ipsum rerum sed cumque
    nisi eius. Ab est illum porro optio molestias id quos, quisquam rerum quis
    saepe. Velit incidunt sapiente, odio optio magnam quaerat rem architecto
    dolores dicta ipsa earum excepturi? Iusto cumque in vero? Officia, veniam
    impedit, quis minus ducimus provident tenetur neque iste accusantium numquam
    cum. Vel quibusdam voluptatum eveniet odio veritatis omnis tempore nemo
    voluptates in eius distinctio, aperiam natus maiores suscipit. Illum, rerum
    accusantium cumque sunt repellat, id sit in qui, autem ut quam ab recusandae
    consectetur debitis dicta esse nulla. Eligendi tempora aspernatur corporis
    error dolores omnis a modi consequuntur. Voluptatibus, inventore hic saepe
    eligendi molestiae laboriosam qui adipisci repellat maxime pariatur, fugiat
    odit ea facere placeat quasi assumenda. Nisi, similique. Consequuntur unde
    obcaecati amet adipisci ipsa, error debitis expedita! Iste iusto dolores
    quis quibusdam perferendis quod nam beatae ipsum voluptates ullam
    reprehenderit rem asperiores fugit dolorum molestiae velit, vero, temporibus
    libero, necessitatibus omnis non magnam? Beatae eum amet delectus. Est,
    reprehenderit? Molestiae suscipit vero ad quaerat facilis excepturi corporis
    repudiandae. Necessitatibus, omnis ab fugit, itaque impedit perferendis
    distinctio magnam veritatis rem quae beatae sunt modi aspernatur? Mollitia,
    optio quidem! Corrupti, vero culpa repellendus commodi officiis harum dolore
    amet ipsa atque similique aspernatur, deserunt inventore ipsam sequi quo
    odit magnam tempore blanditiis. Amet omnis aspernatur quisquam vel
    laboriosam voluptatem praesentium. Explicabo quaerat aperiam laudantium
    recusandae, autem vel ducimus magnam distinctio error magni voluptatum natus
    odio accusamus. Quasi porro, consequuntur quas, eveniet, iure fugiat
    obcaecati ad fugit asperiores repellendus dolore nostrum? Quibusdam ipsam
    quisquam vero neque accusantium quam atque est, ipsa deserunt, debitis aut
    culpa pariatur! Temporibus, velit dolorem itaque fugiat eligendi voluptatum
    nesciunt iste, quo nemo voluptas cupiditate explicabo consectetur! Alias
    repudiandae dolorum, perspiciatis quas officia distinctio quod quo tenetur
    doloremque at eveniet dolore blanditiis odit ad consequuntur quisquam a.
    Culpa, perspiciatis? Eveniet, pariatur? Ipsa deserunt eveniet blanditiis
    quidem dolorem? Laborum nam obcaecati mollitia ex dignissimos molestias vero
    ratione praesentium omnis vel expedita ipsam incidunt ipsum fuga quo veniam
    alias, earum consectetur sint repudiandae perspiciatis minus enim
    distinctio! Mollitia, sunt? Nobis omnis veritatis voluptates, magnam
    provident fugit doloribus perspiciatis nihil tenetur, explicabo repellendus
    in aut ea nesciunt ipsam ipsa consequatur culpa maxime libero a tempora,
    cupiditate totam officiis! Earum, veritatis! Veniam neque laudantium, amet
    cum excepturi, error architecto a nesciunt at quos consectetur alias dolore
    ad pariatur vero. Incidunt veniam voluptatibus, ipsum tenetur deleniti
    veritatis aliquid obcaecati consequuntur aspernatur corrupti. Nihil
    praesentium pariatur earum esse qui. Nam quasi placeat vel deserunt modi
    ipsa harum ducimus quam omnis quaerat animi deleniti tempora, beatae quos
    excepturi obcaecati? Quaerat nemo enim minima sint. Veniam esse eos facere
    fugit cupiditate maiores iure qui suscipit. Reiciendis eligendi recusandae,
    sapiente facere magni rerum aspernatur quis saepe. Soluta maxime a provident
    corporis dolore reiciendis fuga quam veniam. Vel impedit recusandae quae
    numquam placeat distinctio qui sapiente earum quos obcaecati temporibus,
    nihil rerum debitis labore cumque in odit. Quam nesciunt iusto ex ad nam!
    Expedita ea eum quasi. Mollitia repudiandae quisquam ad tenetur veniam iure
    natus sint necessitatibus, culpa omnis doloremque, iusto quia minima nemo
    vel consectetur. Nam animi nesciunt hic adipisci accusamus corrupti eum
    optio sapiente commodi? Voluptatem nemo non laboriosam, quaerat eligendi
    delectus rem debitis deleniti deserunt corporis qui dicta minus. Ipsam,
    vitae. Recusandae iusto autem voluptate qui, voluptates, quas amet
    voluptatum in est obcaecati tenetur? Dolore alias nemo nobis magni? Est
    voluptas iusto maxime, laborum, accusamus deleniti quod corrupti similique
    perspiciatis dolores natus animi officiis atque aperiam obcaecati voluptatum
    praesentium vel rem unde accusantium error! Voluptatibus distinctio sapiente
    eius tempora esse labore magni omnis adipisci culpa. Quod quis
    necessitatibus vitae! Dolorem iusto velit non quae soluta magni error,
    tenetur praesentium vitae eum laudantium repellendus nulla? Nesciunt ea
    culpa cupiditate dolor libero. Exercitationem sunt quaerat alias? Iusto qui
    esse sed officia, voluptatibus iure ab ex minima adipisci reprehenderit
    accusamus pariatur suscipit laborum quasi excepturi, reiciendis ipsum.
    Atque, expedita impedit quaerat repudiandae mollitia commodi quos hic ex?
    Animi doloribus ut ipsa consequuntur sapiente doloremque officiis iure
    culpa, itaque deserunt quae ad eaque provident consequatur accusantium
    necessitatibus assumenda! Natus ad iste numquam hic tempore praesentium
    consequuntur a laudantium ipsam doloribus accusantium omnis obcaecati
    molestiae explicabo quos quaerat, earum sit provident id ducimus delectus
    commodi? Beatae omnis magni natus? Ab sequi mollitia ex doloremque explicabo
    aut accusantium quo perspiciatis aliquam ipsum id, consectetur dolorem est,
    fugit consequuntur veniam! Laborum illum nostrum quaerat nemo nam quia illo,
    assumenda rerum accusantium. Et aspernatur animi obcaecati labore, suscipit
    velit voluptate corporis voluptas? Incidunt dignissimos fugiat vitae
    cupiditate, sequi beatae qui. Perferendis culpa itaque vel suscipit eligendi
    placeat quo saepe tenetur blanditiis odit. Accusamus voluptatem quidem est
    aut rerum iure, eaque mollitia labore tenetur ullam optio, praesentium dicta
    accusantium assumenda cum temporibus. Qui accusantium pariatur aliquid
    inventore neque minima vero repellendus quo reiciendis. Quas architecto quo,
    doloremque voluptas sequi incidunt aspernatur aliquam quasi maxime quibusdam
    molestias repellat? Accusantium, in obcaecati consequatur laborum molestias
    voluptate maxime ex, quod culpa praesentium vel dolore et iure. Numquam
    illum dolorem ipsam voluptatem quibusdam iure, quos voluptatum temporibus
    et, dolore praesentium, quo perferendis? Laudantium est magnam molestiae
    similique nam ratione dolorem accusamus deleniti quia. Autem reiciendis
    nulla iste. Accusamus error facilis ratione voluptatem illum, et eligendi
    nihil adipisci soluta officia, explicabo quis corporis. Harum alias
    molestiae repellendus doloremque ullam nesciunt, vero fugiat obcaecati, sit
    eius aspernatur quisquam dolor. Nihil autem ad expedita enim veniam unde
    aliquam quas consequatur aut, a soluta dolor eos exercitationem quae
    cupiditate! Sunt possimus explicabo illum dolor maxime minus rerum neque
    vitae nemo repellat! Quod cupiditate deleniti aut pariatur debitis tempore
    repellat, id distinctio obcaecati saepe voluptate laboriosam in nihil
    tempora esse nam, repellendus iusto amet doloremque totam consequatur sunt
    vitae! Nihil, optio asperiores. Totam, natus voluptate doloribus, vitae
    nobis similique id doloremque dicta, quod quam deleniti nihil perferendis
    quaerat repellat? Ratione provident itaque magni in? Dolore nesciunt
    inventore repellendus libero voluptatum est nostrum. Delectus, totam vero
    officiis at quibusdam id ab. Minus repellat vero quas laudantium voluptatum
    reprehenderit aliquid quisquam velit minima, libero laboriosam amet totam
    aspernatur itaque ipsam fugiat dolorem dignissimos non. Pariatur
    reprehenderit ut sint eum, natus perferendis ad facere dignissimos? Deleniti
    provident voluptatem velit officia mollitia obcaecati cupiditate dicta! Modi
    aliquam facilis cum vero nisi ut explicabo, repellat quod blanditiis.
    Tempora officia magni aliquam sunt, dolorem quae, qui possimus ex laborum
    rerum at optio odit aut rem necessitatibus corporis dignissimos recusandae
    velit soluta harum natus. Incidunt velit culpa neque recusandae. Delectus
    rerum nisi ipsum autem optio aspernatur architecto quis at aliquam ut,
    officia tempora placeat ipsa voluptates facere sunt iusto quos sequi maiores
    vitae voluptatibus dolor possimus! Culpa, cupiditate dolores. Hic rem rerum
    vitae impedit sed cum cupiditate dolores vero dolorum nisi, fugiat ratione
    nesciunt consequatur ex atque modi quam, corporis tenetur quidem facilis in!
    Quo quam animi magni dignissimos! Magnam velit nam nostrum dolore cumque
    placeat, accusamus debitis officiis est et voluptas distinctio laborum unde,
    explicabo numquam eum iste? Quisquam placeat earum iste ut officiis commodi
    dignissimos aliquid corporis. Quas rem exercitationem nulla, reprehenderit
    itaque magni explicabo ducimus error in odit, quod vel. Quos a neque
    accusantium quae magni modi quod? Aliquam provident recusandae illum
    consequatur quis, molestiae iure! Aut voluptates magnam praesentium sed
    voluptate sapiente commodi facilis. Earum tempora iste ullam iusto aliquam
    quaerat sapiente harum sit quae voluptate omnis perferendis, impedit eveniet
    dolores asperiores officia fugiat ducimus. Nemo adipisci doloribus
    explicabo, odit quam, tempore ad, quisquam esse consequatur excepturi
    temporibus corrupti aperiam sint vitae vero odio molestias deleniti dolor?
    Quidem ut, id eveniet esse porro ipsa placeat. Corporis saepe numquam
    repellendus deleniti beatae. Vel earum quae deserunt harum possimus
    doloremque ipsum, dicta, recusandae eveniet voluptatum neque at voluptatibus
    cumque eius deleniti quibusdam! Provident animi dolore ab optio. Quas sed
    rerum aliquid eaque, repellendus dignissimos autem maiores? Non veritatis
    delectus incidunt voluptate ea natus ullam beatae repellendus repellat
    dolorum aliquam nesciunt iure quisquam quaerat, deserunt autem officiis
    totam. Accusantium odit labore hic atque quidem iure cupiditate soluta in
    quasi. In dolores quas obcaecati quis accusamus ex corrupti. Quia
    praesentium enim cumque libero quisquam? Laboriosam perferendis aut sunt
    quo. Id, molestias? Unde iste rerum optio dolore accusantium molestiae non
    corrupti quibusdam tenetur nostrum. Nemo praesentium veniam adipisci
    excepturi aliquid nisi quam consequuntur alias porro, cumque amet, nobis,
    expedita error. Sed autem animi quis officiis! Omnis voluptatibus
    reprehenderit nisi exercitationem perferendis? Repellendus id, iusto modi
    hic nesciunt velit similique totam porro. Unde quidem non ipsa aperiam error
    blanditiis, repellat illo. Quo veniam nam non odio dolores fugiat aspernatur
    in, veritatis sapiente doloribus molestiae. Iure hic quae optio earum, a non
    dolores ducimus quo perspiciatis dignissimos impedit maiores rem. In, illo.
    Libero nam excepturi impedit corrupti voluptatem consequuntur omnis vero
    atque culpa harum alias exercitationem, deleniti optio, perspiciatis est
    minima perferendis? Reiciendis sapiente corporis maiores nesciunt modi
    atque, corrupti vero provident! Eaque distinctio adipisci alias non fuga,
    repudiandae quisquam ipsa ex cumque rem fugiat harum, mollitia possimus cum
    placeat quaerat labore neque, consequatur expedita odit. Aliquam perferendis
    amet dolorem sequi dicta? Porro, fuga eos facere, consequatur voluptatum
    nostrum fugiat alias accusantium est expedita iure perferendis ad mollitia
    ullam eius ipsum amet reprehenderit. Deserunt dolorum alias dolor! Similique
    tempora quae itaque veniam? Provident modi similique eligendi dolorem quos
    distinctio magnam minus dolor consequuntur quae dolorum quaerat saepe quo
    praesentium, earum fugit dolores suscipit, natus ducimus? Corrupti quas
    quasi quam officiis explicabo? Unde. Modi itaque earum obcaecati ullam
    tempora blanditiis distinctio! Nam aut dolorum culpa vel provident unde
    consequuntur impedit doloribus, assumenda, minima adipisci? Esse mollitia
    harum reprehenderit quidem repellendus provident, inventore nobis. Iste esse
    corrupti ab aperiam accusantium repellendus quisquam nemo sit doloremque
    laudantium ipsum, reprehenderit voluptate veritatis molestias voluptatibus
    officiis obcaecati. Nostrum sint enim aspernatur aut vel id, doloremque
    reprehenderit expedita! Sunt praesentium pariatur officia. Dignissimos, qui
    tempora. Eveniet ducimus, voluptatum pariatur voluptatibus sequi natus
    dolorum, facere velit adipisci vero sapiente voluptates tempora maiores enim
    quaerat! Culpa assumenda sunt autem commodi! Eius aspernatur, adipisci atque
    sequi neque sit quos pariatur ea, excepturi nostrum cupiditate quasi vero et
    ducimus ut reprehenderit vel debitis enim natus, dolorum consequuntur aut
    laborum saepe. Dolorem, nisi. Optio facilis dolore voluptates, reprehenderit
    ut dolor, delectus adipisci expedita cumque quia architecto, numquam dicta
    magnam voluptatem laboriosam unde aut. Magni illum qui saepe in nostrum
    animi reprehenderit iusto possimus? Aperiam voluptates sapiente id, veniam
    facere voluptas dolore laborum. Vitae dolorum deserunt, porro ea eveniet
    ipsa error distinctio eaque ipsam debitis suscipit, cumque iure enim odit ab
    similique temporibus ipsum. Et aperiam libero culpa, eum autem laudantium
    dicta modi exercitationem omnis, voluptates ipsam repellat. Eveniet quam
    nostrum fuga distinctio explicabo nobis saepe tempora, facere, nesciunt
    inventore fugit soluta, id quis. Veritatis perspiciatis rem tempora, ipsum
    voluptas placeat, aliquam amet ad officiis, mollitia commodi architecto.
    Nihil, ab repudiandae! Dolore consequuntur earum quibusdam ullam architecto.
    Odit voluptatum obcaecati quo possimus sed consequuntur? Quas, cum maxime
    incidunt nulla molestias soluta delectus repudiandae recusandae ducimus fuga
    aliquid dicta ea. Veritatis laborum recusandae ipsam, dolores natus in
    harum. Eius saepe ex molestiae dolore alias quod. Repellendus eum debitis
    excepturi recusandae, repellat accusantium quos aliquam voluptatem in optio
    facilis cum nulla. Voluptas nihil sit, id maxime ratione animi repellat, eos
    non dolorum laudantium, perferendis ipsum amet? Animi numquam eius dolores,
    harum iste labore laboriosam officia magnam aut assumenda. Et, eaque fugit,
    repudiandae, placeat cupiditate sit qui fugiat tenetur pariatur veritatis
    quod inventore esse nulla obcaecati debitis! Culpa consequatur, obcaecati
    quis porro, qui autem, dolorem vel ipsa labore eum numquam! Sint quod illo
    debitis iste quo enim sequi eligendi cum, corporis delectus beatae nemo
    perspiciatis nisi omnis. Doloremque repudiandae, ratione dicta dolorum
    dignissimos nobis provident ducimus labore animi eaque maiores,
    perspiciatis, aspernatur debitis. Omnis doloribus incidunt non neque
    accusantium dignissimos quaerat debitis qui recusandae! Adipisci, amet
    quisquam! Eum, voluptatum! Porro fugiat, quis eveniet eligendi voluptatibus
    explicabo, possimus perspiciatis cumque, dicta magnam fuga nisi similique
    illo vero quas illum dolore beatae debitis facere! Placeat delectus impedit
    rem quidem. Mollitia dolore ipsa officia modi omnis, accusamus voluptates!
    Natus, perferendis molestiae vel ab expedita, corrupti nobis quis incidunt
    voluptates nostrum distinctio officia! Itaque dolores animi distinctio,
    totam nulla aut deserunt! Ducimus, eius! Fugiat eligendi rerum, nihil harum
    possimus porro animi officia temporibus alias? Cupiditate cum harum dolore
    ipsam mollitia, soluta ad aspernatur illum vitae aliquam eveniet fugiat,
    ipsum accusamus velit! Quia, atque. Recusandae, dolore itaque cumque iusto
    delectus inventore cum voluptatem veritatis quos totam perferendis eaque
    molestias saepe quisquam! Explicabo reprehenderit eaque rerum aliquam,
    dolores doloremque recusandae dolorum cupiditate. Laudantium. Magnam nisi
    odio, in blanditiis veritatis quam cum dicta, commodi nobis corrupti eos
    culpa perspiciatis. Incidunt, impedit? Exercitationem sit iusto ex, corporis
    praesentium ratione ipsum eaque qui consequatur quasi dolore! Suscipit
    tenetur ex sapiente! Quaerat repellendus eius ipsam in incidunt, inventore
    officiis ullam porro dicta exercitationem! Rerum, ratione eius optio autem
    quae, nobis alias at aliquid magnam distinctio illo error. Aut porro quam
    repudiandae odit nihil voluptate officiis nisi laborum quae, neque ullam.
    Optio, possimus saepe nemo vitae dolor ullam officia atque, obcaecati fuga
    magni cupiditate exercitationem, corporis veritatis quam. Ex, dignissimos
    sed excepturi eum praesentium temporibus, expedita ea ad asperiores
    doloremque eveniet labore nemo molestiae enim eius ducimus reprehenderit
    iste vel nisi et numquam minima animi dolorem at? Earum? Magni natus
    inventore rem reprehenderit veniam? Magnam ipsum, earum distinctio ducimus
    totam nemo veritatis quaerat delectus voluptatum minima, neque sapiente
    vero! Enim odio libero fugit. Nemo adipisci dolorum dicta animi? Maxime
    dignissimos error recusandae beatae. Quos a rem maiores sunt porro assumenda
    laudantium et! Sint ut, consequuntur architecto molestiae dignissimos, optio
    sed pariatur laborum quas accusantium culpa minus placeat doloribus. Omnis
    fugit quisquam eius minus, error est quam eos mollitia doloremque amet quas
    reprehenderit? Harum, natus iste. Possimus temporibus dolorum nemo, illo
    voluptatum aliquid fuga, odio, doloribus eaque quasi dignissimos? Assumenda,
    error eligendi expedita officia veniam necessitatibus molestias incidunt!
    Officia consequatur possimus vitae tempora ipsam libero aperiam
    exercitationem est odio! Repellendus beatae quis, rem molestias praesentium
    quae. Ipsum, voluptates voluptatum. Officia illo officiis voluptate eligendi
    praesentium voluptatum ea eaque veritatis similique. Asperiores id, quas
    fugit nulla accusamus molestiae. Nesciunt aliquid fugiat vitae
    exercitationem et similique consequuntur nihil, cumque atque accusamus.
    Praesentium veniam quam reiciendis magnam maiores unde facere beatae! Ab et
    aliquam, cumque iste distinctio quas consequatur vel ut velit natus,
    aspernatur asperiores vitae suscipit fuga! Fugit, atque aspernatur! Qui.
    Quidem, dolore alias. Iusto sequi quae nihil dignissimos, dolore quasi
    earum, minus possimus, vero alias cupiditate corrupti. Doloremque, commodi
    possimus quos sequi mollitia repudiandae odit aspernatur sit vero, tempore
    explicabo. Sint enim illum necessitatibus praesentium cupiditate non ea odit
    iste laborum, quo deserunt adipisci perspiciatis quisquam beatae culpa
    nobis. Repellat beatae unde deleniti autem incidunt, dignissimos a
    perspiciatis et. Sint. Asperiores vitae officiis aspernatur necessitatibus,
    cupiditate magni neque ab ratione impedit, nemo, incidunt libero saepe
    molestiae sunt! Saepe, quas cumque minima numquam debitis illo ipsam odit in
    nam cum odio! Praesentium dicta, illum ipsum omnis aspernatur expedita ullam
    quae atque ducimus. Reiciendis maiores error et possimus provident dolores
    qui repellat aspernatur aliquid, ipsam quibusdam, explicabo, quidem vero at?
    Deleniti, minus. Perferendis labore exercitationem vel incidunt optio atque,
    natus consequatur quae deserunt ratione, unde asperiores officiis omnis,
    ipsum velit aspernatur fugiat veniam consequuntur? Doloremque, maiores id!
    Dicta ex unde vero qui. Ipsa sed neque natus omnis non cumque dolor, quod
    repellendus quisquam, rerum rem iste exercitationem aut officiis explicabo
    enim soluta ullam. Obcaecati neque tempore consequuntur ea ullam, pariatur
    eum assumenda. Eius dignissimos pariatur ad adipisci magni voluptatem!
    Suscipit molestiae, ipsam unde nesciunt voluptatum magni repellendus sint
    enim officia pariatur quibusdam sequi dolorum dolore aperiam mollitia non
    sit quisquam sapiente. Natus. Facere cumque praesentium voluptatibus
    quisquam tempore aut non. Expedita officia nostrum nobis laboriosam
    sapiente, doloribus porro? Repellendus fuga corrupti minus harum nisi, quas
    quibusdam ducimus dolor, vel maxime quae. Reprehenderit? Totam facilis
    fugit, distinctio minima veritatis incidunt. Ab voluptates, fugit sed autem
    nobis repellat aspernatur, in, delectus dolorum laborum inventore
    perferendis! Doloremque, minima modi nulla consectetur iure corporis labore
    officia? Quisquam aspernatur velit labore error consequatur adipisci libero
    fugit, consequuntur similique officiis, qui debitis, ad illo possimus quasi
    voluptatum quod quae obcaecati corrupti quaerat excepturi nemo facere
    asperiores sequi! Est. Tempora ipsam modi nesciunt repudiandae facere alias
    doloremque, unde deserunt corrupti sequi voluptatem necessitatibus
    asperiores neque suscipit voluptates hic quo. Ullam maxime vero cum cumque
    autem sapiente culpa ratione voluptatem? Beatae officia officiis mollitia
    neque aut quidem ut ipsum, voluptates consequatur fuga recusandae deleniti
    dolorem voluptatibus veritatis id esse impedit nesciunt itaque vero
    molestiae? Blanditiis facilis voluptates iusto eaque beatae! Perspiciatis,
    alias. Tempora aliquid non odio eaque, architecto quo. Esse expedita
    accusamus fugiat blanditiis? Provident, minima! Voluptates, illum! Nemo,
    asperiores. Tenetur, distinctio fuga. Deserunt quos veniam reiciendis ipsa?
    Inventore, totam. Corporis quos deleniti ea maiores eligendi provident
    fugit, repellendus expedita voluptates excepturi veritatis qui at
    exercitationem distinctio eveniet ut, dolor magni similique. Quae, iure
    expedita. Qui recusandae illo commodi natus. Numquam saepe natus blanditiis,
    perspiciatis dolores ipsum fugit molestias nobis iusto possimus eius rerum,
    totam provident explicabo officia hic accusamus quia aut! Omnis mollitia
    ipsam dolor quo provident? Et, doloribus? Dolorum perferendis maiores
    distinctio dignissimos? Dolor sunt, quam ad possimus nam at perferendis
    mollitia assumenda iste repellat eveniet cum quasi deserunt corrupti dolores
    sapiente harum repellendus amet, dignissimos quas rerum! Modi enim totam
    cupiditate, neque asperiores odio molestias ullam exercitationem ab eaque
    voluptatibus a temporibus at, fugiat odit? Ea blanditiis explicabo
    praesentium sint voluptatum cupiditate, quibusdam quam aspernatur amet hic?
    Beatae asperiores corporis vero nobis velit ipsa distinctio qui eligendi
    tempore officiis obcaecati assumenda delectus nemo eos doloribus excepturi
    voluptatibus laborum atque, id dicta molestias architecto eius recusandae.
    Sit, qui. Mollitia sit natus voluptas totam nobis porro at commodi odit.
    Velit molestiae perspiciatis veniam, dolores non amet asperiores sapiente,
    pariatur ipsa voluptas quas. Corporis laboriosam aperiam ipsa autem quidem
    nam. Deleniti, maiores libero. Voluptates voluptas aspernatur natus sit
    neque sapiente aliquid eligendi magnam ipsum architecto veniam unde magni
    labore temporibus, blanditiis necessitatibus non. Optio amet maiores
    accusamus error blanditiis voluptatibus? Nihil, delectus iusto possimus,
    molestiae rerum ex voluptates accusantium vel nulla, voluptatum placeat?
    Ducimus tenetur id ratione delectus esse blanditiis animi ex deserunt ipsa
    minima, reprehenderit maiores nesciunt quibusdam! Quas. Praesentium ipsa
    consequatur perspiciatis possimus hic dignissimos est deleniti quidem iure.
    In voluptate minima libero ipsum sunt perspiciatis illum magnam. Dicta
    optio, corrupti placeat reiciendis ab quam ex minima a! Suscipit eum, magnam
    similique modi iure ipsa molestias. Tempore blanditiis praesentium magni
    sapiente delectus obcaecati libero quia at, reiciendis reprehenderit. Atque
    commodi id ullam corrupti, corporis nisi excepturi cupiditate ex! Accusamus
    tempora eaque iste ducimus quos, neque animi sunt odit quia id eligendi
    similique velit. Vitae placeat veritatis temporibus eos ad, laboriosam
    commodi, voluptates ab minus, expedita facere sapiente eum! Minima eaque
    facere ullam id, porro quaerat provident dolorem quos sapiente tempora
    molestias incidunt eos quae, voluptas accusantium reprehenderit tempore
    quasi illum aperiam fuga quod eveniet? Dignissimos, corrupti aliquid.
    Voluptatum? Odit in magni incidunt. Doloremque corporis, odio, ipsum impedit
    esse deserunt harum in, adipisci cum officia culpa vel officiis et omnis
    laborum. Odit, corporis sapiente aperiam accusamus quibusdam provident
    dolore. Labore, exercitationem placeat, qui facilis odit tenetur asperiores
    voluptates molestiae illo voluptatum aperiam voluptas aut aliquam fugit.
    Officiis aliquam et, quas expedita dolorem, cumque velit assumenda quaerat
    nesciunt doloremque saepe! Consectetur laborum praesentium error
    necessitatibus placeat quia odit provident voluptatibus quos, sequi
    officiis! Repellat tenetur provident voluptate ad minima itaque pariatur
    nobis fuga quod, unde corrupti tempore nihil minus voluptas. Iste harum
    ullam odio nihil repellat neque consequatur libero veniam iusto quia
    corporis id magnam maxime consequuntur temporibus placeat, voluptatem,
    repudiandae, dicta dolore excepturi pariatur hic sunt magni. Dignissimos,
    qui! Ullam magni eius dolore? Quisquam, possimus aperiam pariatur quidem
    adipisci deserunt in quis recusandae iste assumenda esse distinctio
    temporibus blanditiis facilis commodi soluta enim quibusdam nulla harum
    laboriosam odit neque. Ad, veritatis asperiores ab porro voluptatem maiores
    beatae ipsum non voluptatum impedit nesciunt blanditiis amet fuga? Tempore
    ex animi magnam velit, laborum ea laboriosam. Aliquid quae accusamus
    voluptatum distinctio at? Praesentium at, consequatur labore assumenda animi
    quos voluptatem fuga molestias, corrupti vero doloribus, tempore debitis
    alias perspiciatis delectus? Quas asperiores voluptas architecto possimus
    eos. Voluptatum recusandae rerum reiciendis vero labore! Officia iure velit
    dolor aut nisi ipsa, sint, dolorum facere provident itaque sed harum alias
    accusamus ab praesentium maiores? Fuga sit nesciunt voluptatem facilis
    excepturi similique doloribus minus placeat praesentium. Nihil quia
    consectetur esse alias veritatis, dicta accusamus? Nulla corrupti, iste
    doloremque minima rerum, id perspiciatis vitae ipsa deleniti laborum error
    eligendi? Cum ducimus ratione fuga vitae vel voluptas sit? Nobis aperiam
    animi esse provident quae nulla minima eaque dolorum sed quo cupiditate
    magni dolorem, blanditiis distinctio quibusdam id in assumenda repudiandae,
    corrupti doloremque labore harum excepturi? Reiciendis, nihil odio! Qui
    quibusdam, placeat consectetur nulla aut error. Velit officia nisi
    consequatur sequi excepturi, fugiat enim? Odio temporibus ab aspernatur
    accusamus nam voluptate et quibusdam debitis dicta, repellendus aut
    praesentium deserunt? Fuga est, laboriosam animi commodi eum ab tempore
    officiis voluptatem qui dolores nulla id voluptates nam explicabo error,
    esse eos exercitationem maiores, magni nihil cum rerum! Aliquid aspernatur
    pariatur accusamus. Impedit eos quidem aliquid dicta similique reprehenderit
    consequatur molestias quibusdam suscipit dolorum beatae necessitatibus
    consectetur quisquam ducimus ut, quos exercitationem dolorem praesentium
    repellendus minus quod odio optio eveniet. Perspiciatis, modi. Minima, eum?
    Minus eligendi et amet. Ab quos, excepturi blanditiis cupiditate porro culpa
    laboriosam quam. Quod, qui sint veritatis vitae unde animi tempore obcaecati
    dolorem excepturi laudantium deleniti? Ducimus, perferendis. Asperiores
    veritatis nihil praesentium provident, aspernatur necessitatibus dolores
    nemo laborum est voluptatum? Veritatis tempora error voluptatem ad veniam,
    similique necessitatibus culpa eum in. Eos officiis tenetur, vitae quas est
    nisi! Cumque doloremque corrupti reiciendis earum porro minima voluptate
    nesciunt exercitationem suscipit, laboriosam, aliquid aliquam quasi fugit
    nihil tempora assumenda. Perspiciatis magni dolorum enim autem nisi dolor ab
    quo ullam animi. Et nam laudantium minus sit accusantium tempora, fuga
    sapiente, ut voluptatum, ratione cupiditate nisi? Nostrum repellendus
    commodi temporibus impedit recusandae earum sed nobis ea reprehenderit fuga
    deserunt eos, quasi eius? Voluptatem nobis eos, fugit unde aut itaque nihil
    quia labore suscipit ullam veniam praesentium voluptas consequatur, officia
    repudiandae commodi, mollitia earum quam delectus consectetur. Doloremque
    assumenda perspiciatis similique ea sapiente?
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDropZone } from '@vueuse/core';
import RecordButton from '../components/VideoPlayer/RecordButton.vue';
import { useFullscreen } from '@vueuse/core';

const videoPlayer = ref<HTMLDivElement>();
const videoObj = ref<HTMLVideoElement>();
const volume = ref<number>(100);
const keyboardControl = ref<HTMLInputElement>();
const step = 1;
const videoSrc = ref<string>();

const { toggle } = useFullscreen(videoPlayer);

function onDrop(files: File[] | null) {
  if (!files) return;
  const selectedVideo = files[0];
  const objectURL = URL.createObjectURL(selectedVideo);
  videoSrc.value = objectURL;
}

useDropZone(videoPlayer, {
  onDrop,
});

function handleScroll(e: WheelEvent) {
  const value = (e.deltaY / 100) * step;
  volume.value = Math.max(0, Math.min(100, volume.value - value));
}

function handleKeyVolumeUp() {
  const value = -step;
  volume.value = Math.max(0, Math.min(100, volume.value - value));
}

function handleKeyVolumeDown() {
  const value = step;
  volume.value = Math.max(0, Math.min(100, volume.value - value));
}

function onMouseOver() {
  document.body.style.overflow = 'hidden';
  if (keyboardControl.value) {
    keyboardControl.value.focus();
  }
}

function onMouseOut() {
  document.body.style.overflow = 'auto';
  if (keyboardControl.value) {
    keyboardControl.value.blur();
  }
}
</script>

<style>
.videos-page {
  @apply p-4 max-w-[960px] flex items-center justify-center mx-auto;
}
.videos-inner {
  @apply w-full flex flex-col items-center justify-center gap-4 relative;
}
.video-player {
  @apply p-3 bg-black aspect-video max-w-[640px] w-full relative;
}
.keyboard-control {
  @apply cursor-default opacity-0 outline-none;
  @apply bg-transparent absolute top-0 w-full left-0 h-full;
}
.volume {
  @apply text-[32px];
}

.bottom {
  @apply max-w-[300px] mx-auto;
}

.video-obj {
  @apply absolute top-0 left-0 w-full h-full;
}

.controls {
  @apply flex flex-row items-center gap-4;
}
</style>
