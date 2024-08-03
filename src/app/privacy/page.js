import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="bg-[#121212] divide-y divide-gray-200 dark:divide-gray-700 p-20">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Privacy Policy
          </h1>
        </div>

        <div className="container py-10">
          <h4 className="text-3xl" id="introduction">
            <Link className="text-gray-500" href={"#introduction"}>
              #
            </Link>{" "}
            <b>Introduction</b>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
          </h4>
          <p>
            Protecting your personal data is important to us. This privacy
            policy informs you about the personal data we collect, how we use
            it, and your rights regarding your data when you visit our website
            and use our contact form.
          </p>
          <br></br>
          <h4 className="text-3xl" id="controller">
            <Link className="text-gray-500" href={"#controller"}>
              #
            </Link>{" "}
            <b>Controller</b>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
          </h4>
          <p>
            The data controller responsible for processing data on this website
            is:
          </p>
          <br></br>
          <ul className="list-disc">
            <li>Jesper Richert</li>
            <li>
              {" "}
              See the{" "}
              <Link className="text-cyan-400" href={"/leagel-notice"}>
                Leagel Notic
              </Link>
            </li>
            <li>
              <Link
                className="text-cyan-400"
                href={"mailto:contact@jesperrichert.xyz"}
              >
                contact@jesperrichert.xyz
              </Link>
            </li>
          </ul>
          <br></br>
          <h4 className="text-3xl" id="data-peronal-storage">
            <Link className="text-gray-500" href={"#data-peronal-storage"}>
              #
            </Link>{" "}
            <b> Collection and Storage of Personal Data</b>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
          </h4>
          <p>
            When you visit our website nexocew.com, information is automatically
            sent from your browser to our website’s server. This information is
            temporarily stored in a log file. The following information is
            collected without any action on your part and is stored until it is
            automatically deleted:
          </p>
          <br></br>
          <ul className="list-disc">
            <li>IP address of the requesting computer,</li>
            <li>Date and time of access,</li>
            <li>Website from which access is made (referrer URL),</li>
            <li>
              Browser used and, if applicable, your computer’s operating system,
              and the name of your access provider.
            </li>
          </ul>
          <br></br>
          <p>The mentioned data is processed for the following purposes:</p>
          <br></br>
          <ul className="list-disc">
            <li>Ensuring a smooth connection to the website,</li>
            <li>Ensuring convenient use of our website,</li>
            <li>Evaluating system security and stability, and</li>
            <li>For other administrative purposes.</li>
          </ul>
          <br></br>
          <p>
            The legal basis for data processing is Art. 6(1) sentence 1 lit. f
            GDPR. Our legitimate interest follows from the purposes listed above
            for data collection. Under no circumstances do we use the collected
            data to draw conclusions about your person.
          </p>
          <br></br>
          <h4 id="contact" className="text-3xl">
            <Link className="text-gray-500" href={"#contact"}>
              #
            </Link>{" "}
            <b>When Using Our Contact Form</b> <br></br>
            <br></br>
            <hr></hr>
            <br></br>
          </h4>
          <p>
            For any kind of questions, we offer you the opportunity to contact
            us via a form provided on the website. A valid email address is
            required so that we know who the request came from and to be able to
            respond to it. Further information can be provided voluntarily.
          </p>
          <br></br>
          <p>
            The data processing for the purpose of contacting us is based on
            your voluntarily given consent according to Art. 6(1) sentence 1
            lit. a GDPR.
          </p>
          <br></br>
          <p>
            The personal data collected by us for the use of the contact form
            will be automatically deleted after your request has been dealt
            with.
          </p>
          <br></br>
          <h4 className="text-3xl" id="datadisclosure">
            <Link className="text-gray-500" href={"#datadisclosure"}>
              #
            </Link>{" "}
            <b>Data Disclosure</b>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
          </h4>
          <p>
            Your personal data will not be disclosed to third parties for
            purposes other than those listed below.
          </p>
          <br></br>
          <p>
            <strong>
              We will only disclose your personal data to third parties if
            </strong>
            :
          </p>
          <br></br>
          <ul className="list-disc">
            <li>
              You have given your explicit consent according to Art. 6(1)
              sentence 1 lit. a GDPR,
            </li>
            <li>
              The disclosure is necessary for the assertion, exercise, or
              defense of legal claims according to Art. 6(1) sentence 1 lit. f
              GDPR, and there is no reason to assume that you have an overriding
              legitimate interest in not disclosing your data,
            </li>
            <li>
              There is a legal obligation for disclosure according to Art. 6(1)
              sentence 1 lit. c GDPR, or
            </li>
            <li>
              It is legally permissible and necessary for the execution of
              contractual relationships with you according to Art. 6(1) sentence
              1 lit. b GDPR.
            </li>
          </ul>
          <br></br>
          <h4 className="text-3xl" id="subjectrights">
            <Link className="text-gray-500" href={"#subjectrights"}>
              #
            </Link>{" "}
            <b>Data Subject Rights</b>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
          </h4>
          <br></br>
          <p>
            <b>You have the right to</b>:
          </p>
          <ul className="list-disc">
            <li>
              Request information about your personal data processed by us
              according to Art. 15 GDPR,
            </li>
            <li>
              Request the correction of incorrect or completion of your personal
              data stored by us according to Art. 16 GDPR,
            </li>
            <li>
              Request the deletion of your personal data stored by us according
              to Art. 17 GDPR,
            </li>
            <li>
              Request the restriction of processing your personal data according
              to Art. 18 GDPR,
            </li>
            <li>
              Receive your personal data that you have provided to us in a
              structured, commonly used, and machine-readable format, or to
              request transmission to another controller according to Art. 20
              GDPR,
            </li>
            <li>
              Revoke your consent at any time according to Art. 7(3) GDPR, and
            </li>
            <li>
              Lodge a complaint with a supervisory authority according to Art.
              77 GDPR.
            </li>
          </ul>
          <br></br>
          <h4 className="text-3xl" id="righttoobject">
            <Link className="text-gray-500" href={"#righttoobject"}>
              #
            </Link>{" "}
            <b>Right to Object</b>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
          </h4>
          <p>
            If your personal data is processed based on legitimate interests
            according to Art. 6(1) sentence 1 lit. f GDPR, you have the right to
            object to the processing of your personal data according to Art. 21
            GDPR, provided there are reasons arising from your particular
            situation.
          </p>
          <br></br>
          <p>
            If you wish to exercise your right to object, simply send an email
            to contact@nexocrew.com.
          </p>
          <br></br>
          <h4 className="text-3xl" id="datasecurity">
            <Link className="text-gray-500" href={"#datasecurity"}>
              #
            </Link>{" "}
            <b>Data Security</b>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
          </h4>
          <p>
            We use the widespread SSL (Secure Socket Layer) method in
            conjunction with the highest level of encryption supported by your
            browser within the website visit. Typically, this is 256-bit
            encryption. Whether an individual page of our website is transmitted
            in encrypted form is indicated by the closed display of the key or
            lock symbol in the lower status bar of your browser.
          </p>
          <br></br>
          <p>
            We also take appropriate technical and organizational security
            measures to protect your data against accidental or intentional
            manipulation, partial or complete loss, destruction, or unauthorized
            access by third parties. Our security measures are continuously
            improved in line with technological developments.
          </p>
          <br></br>
          <h4 className="text-3xl" id="policy">
            <Link className="text-gray-500" href={"#policy"}>
              #
            </Link>{" "}
            <b>Currentness and Changes to this Privacy Policy</b>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
          </h4>
          <p>
            <b>
              This privacy policy is currently valid and has the status
              02.08.2024.
            </b>
          </p>
          <br></br>
          <p>
            Due to the further development of our website and offers above it or
            due to changed legal or official requirements, it may be necessary
            to change this privacy policy. The current privacy policy can be
            accessed and printed out at any time on the website at .
          </p>
        </div>
      </div>
    </>
  );
}
