import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 p-20">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Legal Notice
          </h1>
        </div>
        <div className="container py-10">
          <h4 className="text-3xl" id='imprint'>
          <Link className='text-gray-500' href={"#imprint"}>#</Link> <b>Imprint According to § 5 DDG</b>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
          </h4>
          <ul className="list-disc">
            <li>Jesper Richert</li>
            <li>Kiebitzreihe 3</li>
            <li>25813 Husum</li>
            <li>Deutschland </li>
          </ul>
          <br></br>
          <h4 className="text-3xl" id='email'>
          <Link className='text-gray-500' href={"#email"}>#</Link> <b>Contact E-Mail</b>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
          </h4>
          <ul className="list-disc">
            {' '}
            <li>
              {' '}
              <Link href={'mailto://contact@jesperrichert.xyz'}>contact@jesperrichert.xyz</Link>
            </li>
          </ul>
          <br></br>
          <strong>Editorial responsibility Represented by</strong>:{' '}
          <ul className="list-disc">
            {' '}
            <li> Jesper Richert</li>
          </ul>
          <br></br>
          <h4 className="text-3xl" id='disclaimer'>
          <Link className='text-gray-500' href={"#disclaimer"}>#</Link> <b>Disclaimer</b>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
          </h4>
          <ul className="list-disc">
            <li>
              § 1 Warning about content The free and freely accessible content of this website was
              createdwith the greatest possible care. However, the provider of thiswebsite does not
              guarantee the correctness and topicality of thefree and freely accessible journalistic
              advice and news provided.Contributions identified by name reflect the opinion of
              therespective author and not always the opinion of the provider. Simplyby calling up
              the free and freely accessible content, no contractualrelationship is established
              between the user and the provider,insofar as the provider lacks the will to be legally
              bound.
            </li>
            <br></br>
            <li>
              § 2 External Links This website contains links to websites of third parties
              (externallinks). These websites are the responsibility of the respectiveoperators.
              When the external links were first linked, the providerchecked the third-party content
              for any legal violations. At thattime, no legal violations were apparent. The provider
              has noinfluence on the current and future design and content of the linkedpages. The
              setting of external links does not mean that the provideradopts the content behind the
              reference or link as his own. Constantmonitoring of the external links is not
              reasonable for the providerwithout concrete evidence of legal violations. With
              knowledge oflegal violations, such external links will be deleted immediately.
            </li>
            <br></br>
            <li>
              {' '}
              § 3 Copyright and ancillary copyrights The content published on this website is
              subject to German copyrightand ancillary copyright law. Any use not permitted by
              Germancopyright and ancillary copyright law requires the prior writtenconsent of the
              provider or the respective rights holder. Thisapplies in particular to the
              duplication, editing, translation,storage, processing or reproduction of content in
              databases or otherelectronic media and systems. Contents and rights of third
              partiesare marked as such. The unauthorized duplication or distribution ofindividual
              content or complete pages is not permitted and ispunishable. Only the production of
              copies and downloads forpersonal, private and non-commercial use is permitted. The
              presentation of this website in external frames is onlypermitted with written
              permission.
            </li>
            <br></br>
            <li>
              {' '}
              § 4 Special Terms of Use Insofar as special conditions for individual uses of this
              websitedeviate from the aforementioned paragraphs, this is expresslypointed out at the
              appropriate point. In this case, the specialterms of use apply in each individual
              case. The European Commission provides a platform for out-of-court onlinedispute
              resolution (OS platform), available athttp://ec.europa.eu/odr.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
