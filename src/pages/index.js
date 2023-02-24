import Layout from "../components/Layout";
import { skills, experiences, projects } from "../profile";
import Link from "next/link";



const Index = () => (

  <Layout>
    {/** Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="Camilo.png" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Camilo Rivas</h1>
              <h4>Software Developer</h4>
              <p>
                I'm a software engineer who constantly seeks out
                innovative solutions to everyday problems. In my three years in
                this industry, I've honed my analytical thinking and
                collaboration skills, and I love working with a team
              </p>
              <a href="https://www.linkedin.com/in/juan-camilo-rivas-molina-a079291b1/">
                <h5 className="font-weight-bold">LinkedIn</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>


    {/** Skills*/}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>

            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>
                  {skill} {percentage}%
                </h5>
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/**Experiences */}
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>
            <ul>
              {experiences.map(({ title, description, from, to }, i) => (
                <li key={i}>
                  <h3>{title}</h3>
                  <h5>
                    {from}-{to}
                  </h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>


    {/**PORTAFOLIO */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portafolio</h1>
            </div>
            {projects.map(({ name, description, image, url }, i) => (
             <Link key={i} href={`${url}`}>
                <div className="col-md-4 p-2 " >
                  <div className="card h-100">
                    <div className="overflow">
                      <img src={`/${image}`} alt="Pokemon app" className="card-img-top" />
                    </div>
                    <div className="card-body">
                      <h3 className="font-weight-normal text-secondary">
                        {name}
                      </h3>
                      <p>{description}</p>
                      <a href={url} className="overflow">Know more</a>
                    </div>
                  </div>
                </div>
             </Link>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="https://github.com/juancamilorivas?tab=repositories">
              <a className="btn btn-outline-light">More projects</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;