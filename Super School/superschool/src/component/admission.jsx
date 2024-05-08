import './admission.css';
import Ad1 from '../images/admission-1.jpg';
import Ad2 from '../images/admission-2.jpg';

const Admissions = () => {
  return (
    <main className="wrapper bg-lightgrey center-well-wrapper">
        <h1 className="h2-bg" style={{ position: 'elative', marginBottom: 10, bottom: 0 }}>
          Admissions
        </h1>
      <section className="intro-txt">

        <div className="container1">
          <p>
            <span className="big-alpha">S</span>uper School has been an institution of choice since 2023 for families in Gujarat who value academic excellence and personality development of their wards. Admissions to the school involve transparency and inclusivity. Detailed information about admissions is shared through local newspapers, messages to parents and is also made available on the school website. Admissions are open throughout the year and consideration is also given to transfer cases.
          </p>

          <p>
            The application process involves filling the application form online or offline. After filling in the application form, parents have to submit the basic credentials of their ward for verification after which admission is confirmed.
          </p>

          <p>
            The gates of the school are open for students with a curiosity to learn.
          </p>
        </div>
      </section>

      <section className="Co-Curricular-main">
        <div className="container">
          <div className="Co-Curricular-content">
            <div className="Co-Curricular-left">
              <div className="visual-art-wrap">
                <img src={Ad1} alt="" className='curr-img'/>
                <p className="our-school-p">
                  Grade 1 to 10 -{' '}
                  <a
                    // href="https://centrepointschools.com/apply-online.html"
                    target="_blank"
                    className="button1"
                  >
                    Apply Now
                  </a>
                </p>
              </div>
            </div>

            <div className="Co-Curricular-right">
              <div className="visual-art-wrap Career-Counselling-wrap" style={{ marginTop: 0 }}>
              <img src={Ad2} alt="" className='curr-img'/>
                <p className="our-school-p">
                  Grade 11 -{' '}
                  <a
                    // href="https://centrepointschools.com/apply-online.html"
                    target="_blank"
                    className="button1"
                  >
                    Apply Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admissions;