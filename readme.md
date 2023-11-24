# Question Paper Generator

The **Question Paper Generator** is a Node.js application that efficiently creates question papers based on specified difficulty distributions.

## Table of Contents

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Installation](#installation)
- [Parameters](#parameters)
- [Example](#example)

## Introduction

The application is designed to generate question papers by selecting questions from predefined sets of easy, medium, and hard questions. The distribution of difficulty levels is customizable, allowing users to specify the percentage of easy, medium, and hard questions in the generated question paper.

## Requirements

- Node.js (version X.X.X)
- npm (version X.X.X)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/question-paper-generator.git

cd question-paper-generator

npm install

node index.js <easy_percentage> <medium_percentage> <hard_percentage> [total_marks]
```
## Parameters
- <easy_percentage>: Percentage of easy questions.
- <medium_percentage>: Percentage of medium questions.
- <hard_percentage>: Percentage of hard questions.
- [total_marks] (optional): Total marks for the question paper.

```bash
node index.js 20 50 30 100
```