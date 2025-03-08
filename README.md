# Static Website Deployment with Terraform, Docker & Cloud 🌍🚀💡

This project demonstrates the deployment of a **static website** using **Terraform**, **Docker**, and Cloud services. It serves as a learning resource for **Infrastructure as Code (IaC)** principles and Cloud deployment strategies. 🌐📚✨

## 📌 Project Overview 🔍⚡📊
- **Infrastructure as Code (IaC)** using Terraform
- **Containerized Deployment** with Docker
- **Cloud Hosting**: Deploying a static website on AWS or Azure
- **Automation**: Managing cloud infrastructure programmatically
- **Scalability**: Learning how to scale static web hosting

## 🚀 Features 🎯📈💾
- Fully automated deployment using Terraform
- Containerized website using **Docker**
- Static website built with **Next.js** and **TailwindCSS**
- Hosted on **AWS S3 + CloudFront** or **Azure Blob Storage + Azure CDN**
- HTTPS support (if configured with CloudFront/Azure CDN)
- Version-controlled infrastructure

## 🛠️ Technologies Used 💻☁️🔧
- **Next.js**: React-based framework for static site generation
- **TailwindCSS**: Utility-first CSS framework for styling
- **Terraform**: Infrastructure as Code (IaC) tool
- **Docker**: Containerization for easy deployment
- **AWS**: S3 (for storage) and CloudFront (for CDN)
- **Azure**: Blob Storage (for storage) and Azure CDN (for CDN)
- **GitHub Actions (Optional)**: CI/CD automation for infrastructure deployment

## 🏗️ Deployment Steps 🏁🔄📤
1. **Clone the Repository**
   ```bash
   git clone https://github.com/PrayagRaj22/Static-Website-Cloud.git
   cd Static-Website-Cloud
   ```
2. **Initialize Terraform**
   ```bash
   terraform init
   ```
3. **Plan Deployment**
   ```bash
   terraform plan
   ```
4. **Apply Configuration**
   ```bash
   terraform apply -auto-approve
   ```
5. **Build & Deploy Next.js Website using Docker**
   ```bash
   cd website
   docker build -t static-website .
   docker run -d -p 3000:3000 static-website
   ```
6. **Access the Website**
   - Get the website URL from Terraform output
   - Open in your browser 🎉🎊🌐

## 🧹 Cleanup 🗑️❌🔄
To destroy the infrastructure and remove resources:
```bash
terraform destroy -auto-approve
```
To stop and remove the Docker container:
```bash
docker stop static-website
``` 

## 📖 Learning Outcomes 🎓📘💡
- Understand how Terraform provisions Cloud infrastructure
- Learn how to deploy a **Next.js + TailwindCSS** static website on AWS or Azure
- Use **Docker** for containerized deployment
- Automate infrastructure management with IaC
- Implement best practices for infrastructure deployment

## 📜 License 📝⚖️✅
This project is licensed under the **MIT License**.

## 🙌 Contributing 🤝💡🔄
Feel free to open issues or submit pull requests to improve this project.

---
_This project is for educational purposes only and is meant to help learners understand Terraform, Docker, Cloud, and modern web development. 📚🚀💡_

