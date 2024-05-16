import React from "react";
import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <div className="container services-page py-5">
        <div className="row align-items-center">
          <div className="col">
            <h1>Services</h1>
          </div>
        </div>

        <p className="lead">
          Schedule a free 30-minute consultation session to discuss your project
          needs.
        </p>

        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3>Frontend Development</h3>
                <p className="text-muted">From $50/hour</p>
                <p>
                  Frontend web development using React, Vue, Angular, and other
                  modern frameworks.
                </p>
                <a className="btn btn-primary" href="/frontend-development">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3>Backend Development</h3>
                <p className="text-muted">From $70/hour</p>
                <p>
                  Building scalable backends with Node.js, Python
                  (Django/Flask), Ruby on Rails.
                </p>
                <a className="btn btn-primary" href="/backend-development">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3>Full Stack Development</h3>
                <p className="text-muted">From $100/hour</p>
                <p>
                  End-to-end web app development - frontend, backend, devops.
                </p>
                <a className="btn btn-primary" href="/full-stack-development">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3>iOS App Development</h3>
                <p className="text-muted">From $100/hour</p>
                <p>Building native iOS apps with Swift and Objective-C.</p>
                <a className="btn btn-primary" href="/ios-app-development">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3>Android App Development</h3>
                <p className="text-muted">From $100/hour</p>
                <p>
                  Native Android development with Java/Kotlin and React Native
                  apps.
                </p>
                <a className="btn btn-primary" href="/android-app-development">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3>Machine Learning Modeling</h3>
                <p className="text-muted">From $125/hour</p>
                <p>
                  Developing, training, and deploying ML models for your needs.
                </p>
                <a
                  className="btn btn-primary"
                  href="/machine-learning-modeling"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3>Data Collection & Annotation</h3>
                <p className="text-muted">Quote based on project</p>
                <p>
                  Scraping, labeling, and processing data for model training.
                </p>
                <a
                  className="btn btn-primary"
                  href="/data-collection-annotation"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
