import type { Chapter } from './types'

import { whatIsLLM, historyOfLLM, applicationsOfLLM } from './topics/overview'
import { transformer, moe, gptSeries, llamaSeries, deepseekSeries, longcatSeries, kimiSeries } from './topics/architecture'
import { dataPreparation, dataStorage, gpuVsTpu, mixedPrecision, parallelTraining, distributedPrinciples, dataParallelPractice, modelParallelStrategy, zeroSeries, distributedCommunication, distributedFramework } from './topics/training'
import { whatIsFineTuning, fineTuningEvolution, lora, qlora, adalora, promptTuning, rlhf, sft, ppo, dpo, grpo } from './topics/finetuning'
import { frameworkEcosystem, langchain, langchainPractice, vllm, ragFramework, trl, peft, llamaFactory, unsloth, frameworkOptimization, serverless } from './topics/frameworks'
import { cot, kvCache, mhaMqaGqa, flashAttention, flashAttention2, flashAttention3, flashDecoding, quantPruningDistillation, modelDeployment } from './topics/inference'
import { howToEvaluate, evaluationMethodology, scenarioDrivenEvaluation } from './topics/evaluation'
import { llmApplications } from './topics/applications'
import { llmSafety } from './topics/safety'
import { aiInfra } from './topics/infra'

export const curriculum: Chapter[] = [
  {
    id: 'overview',
    title: { en: 'LLM Overview', zh: '大模型概述' },
    icon: '🍇',
    topics: [whatIsLLM, historyOfLLM, applicationsOfLLM],
  },
  {
    id: 'architecture',
    title: { en: 'LLM Architecture', zh: '大模型架构' },
    icon: '🍋',
    topics: [transformer, moe, gptSeries, llamaSeries, deepseekSeries, longcatSeries, kimiSeries],
  },
  {
    id: 'training',
    title: { en: 'LLM Training', zh: '大模型训练' },
    icon: '🍒',
    topics: [dataPreparation, dataStorage, gpuVsTpu, mixedPrecision, parallelTraining, distributedPrinciples, dataParallelPractice, modelParallelStrategy, zeroSeries, distributedCommunication, distributedFramework],
  },
  {
    id: 'finetuning',
    title: { en: 'LLM Fine-Tuning', zh: '大模型微调' },
    icon: '🌶️',
    topics: [whatIsFineTuning, fineTuningEvolution, lora, qlora, adalora, promptTuning, rlhf, sft, ppo, dpo, grpo],
  },
  {
    id: 'frameworks',
    title: { en: 'LLM Frameworks', zh: '大模型框架' },
    icon: '🍔',
    topics: [frameworkEcosystem, langchain, langchainPractice, vllm, ragFramework, trl, peft, llamaFactory, unsloth, frameworkOptimization, serverless],
  },
  {
    id: 'inference',
    title: { en: 'Inference & Deployment', zh: '大模型推理与部署' },
    icon: '🥘',
    topics: [cot, kvCache, mhaMqaGqa, flashAttention, flashAttention2, flashAttention3, flashDecoding, quantPruningDistillation, modelDeployment],
  },
  {
    id: 'evaluation',
    title: { en: 'LLM Evaluation', zh: '大模型评估' },
    icon: '🎃',
    topics: [howToEvaluate, evaluationMethodology, scenarioDrivenEvaluation],
  },
  {
    id: 'applications',
    title: { en: 'LLM Applications', zh: '大模型应用' },
    icon: '🎯',
    topics: [llmApplications],
  },
  {
    id: 'safety',
    title: { en: 'Safety & Challenges', zh: '大模型安全与挑战' },
    icon: '🪁',
    topics: [llmSafety],
  },
  {
    id: 'infra',
    title: { en: 'AI Infrastructure', zh: 'AI Infra' },
    icon: '🏗️',
    topics: [aiInfra],
  },
]

export const totalTopics = curriculum.flatMap(c => c.topics).length
