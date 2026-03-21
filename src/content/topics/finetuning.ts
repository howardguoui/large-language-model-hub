import type { TopicContent } from '../types'

export const whatIsFineTuning: TopicContent = {
  id: 'what-is-finetuning',
  title: { en: 'What is Fine-Tuning?', zh: '什么是微调' },
  contentType: 'article',
  content: {
    zh: `微调（Fine-tuning）是指在已经预训练好的模型基础上，使用特定任务的数据进行进一步训练，使模型更好地适应特定场景或任务。就像调整一辆万能汽车的发动机，以适应你具体的驾驶需求，而不是从零开始制造一辆新车。

## 微调的重要性

预训练模型（如 BERT、GPT）已经从海量数据中学习了丰富的语言知识。微调的价值在于：

- **节省时间和计算资源**：不需要从零训练，大幅降低成本
- **提升模型性能**：在特定任务上显著优于通用模型
- **适应多样化任务**：文本分类、问答、命名实体识别等各类下游任务

## 微调的基本流程

![微调基本流程图](/images/finetuning-workflow-zh.svg)

1. 选取预训练模型作为**源模型（Source Model）**
2. 复制模型层，构建**目标模型（Target Model）**
3. 随机初始化输出层（适配新任务的输出形式）
4. 在源数据集上预训练，在目标数据集上微调

## 微调的主要方式

### 全量微调（Full Fine-Tuning）

更新模型的全部参数。优点是效果好，缺点是计算成本高，需要大量 GPU 资源。

### 参数高效微调（PEFT）

只更新少量参数，大幅降低计算成本，常见方法包括：

- **Adapter**：在 Transformer 层中插入小型适配器模块
- **LoRA（低秩适配）**：通过低秩矩阵分解来近似参数更新
- **Prefix Tuning**：在输入前添加可学习的前缀向量

## 总结

微调是连接通用预训练模型和具体应用场景的桥梁。它让我们能够用较低成本，在特定任务上获得优秀的模型表现。理解微调的基本概念，是深入学习大模型应用的重要一步。`,

    en: `Fine-tuning refers to taking a pre-trained model and further training it on task-specific data, adapting it to a specific use case. Think of it like tuning a versatile car engine for your specific driving needs — rather than building a new car from scratch.

## Why Fine-Tuning Matters

Pre-trained models (like BERT and GPT) have already learned rich linguistic knowledge from massive datasets. Fine-tuning adds value because it:

- **Saves time and compute**: No need to train from scratch — dramatically lower cost
- **Improves task performance**: Significantly outperforms general models on specific tasks
- **Adapts to diverse tasks**: Text classification, QA, named entity recognition, and more

## Basic Fine-Tuning Workflow

![Fine-tuning workflow diagram](/images/finetuning-workflow-en.svg)

1. Select a pre-trained model as the **Source Model**
2. Copy model layers to build the **Target Model**
3. Randomly initialize the output layer (to match the new task's output format)
4. Pre-train on the source dataset, then fine-tune on the target dataset

## Main Fine-Tuning Approaches

### Full Fine-Tuning

Updates all model parameters. Produces great results but requires heavy compute and significant GPU resources.

### Parameter-Efficient Fine-Tuning (PEFT)

Updates only a small subset of parameters, drastically reducing cost. Common methods include:

- **Adapter**: Inserts small adapter modules within Transformer layers
- **LoRA (Low-Rank Adaptation)**: Approximates parameter updates via low-rank matrix decomposition
- **Prefix Tuning**: Prepends learnable prefix vectors to the input

## Summary

Fine-tuning bridges general pre-trained models and specific applications efficiently. It lets you achieve strong task-specific performance at a fraction of the training cost. Understanding fine-tuning is a foundational step in learning how large language models are applied in practice.`,
  },
}

export const fineTuningEvolution: TopicContent = {
  id: 'finetuning-evolution',
  title: { en: 'Evolution of Fine-Tuning Techniques', zh: '微调技术的发展与演进' },
  contentType: 'article',
  content: {
    zh: `微调技术从最初的全参数更新，逐步演进为更高效、更灵活的参数高效微调（PEFT）方法体系。了解这一发展脉络，有助于理解各种技术的设计动机与适用场景。

## 微调背景与动机

在大模型时代，全量微调面临三大核心挑战：

**计算成本高**：对于拥有数十亿参数的大模型，更新全部参数需要巨大的算力与显存资源，普通研究者和中小企业难以承受。

**灾难性遗忘**：在特定任务数据上全量微调后，模型可能"忘记"预训练阶段学到的通用知识，导致泛化能力下降。

**数据效率低**：许多下游任务的标注数据十分有限，全量微调容易在小数据集上过拟合，泛化能力差。

这三个动机共同推动了参数高效微调（PEFT）技术的快速发展。

## 技术发展时间线与主要方法

### 2018年与之前：全参数微调

全参数微调（Full Fine-Tuning）是最早期的迁移学习方式，对预训练模型的所有参数都在下游任务数据上进行更新。

- 效果最佳，所有参数参与更新，是其他方法的性能上界
- 训练慢，显存和算力要求高
- 每个下游任务需要独立保存一份完整的模型副本

### 2019年：特征提取

特征提取冻结预训练模型的大部分参数，只训练顶层的分类头（输出层），将预训练模型作为固定的特征提取器使用。

![特征提取 vs 微调对比](/images/finetuning-feature-extraction-zh.svg)

- 相当于只训练分类器，速度极快
- 资源消耗极小，适合数据量少的场景
- 效果有限，无法充分利用预训练模型的表达能力

### 2019年：Adapter 方法

Adapter 方法由 Houlsby 等人提出，在 Transformer 的每个子层（Self-Attention 和 FFN）后插入轻量级的 Adapter 模块，只训练这些新增模块的参数。

![Adapter 架构示意图](/images/finetuning-adapter-architecture.svg)

- 只需训练少量新增的 Adapter 参数（约为原模型的 1%–5%）
- 参数效率高，冻结原始参数，不影响基础模型能力
- 推理时有轻微额外延迟（需经过 Adapter 前向计算）

### 2021年：LoRA

LoRA（Low-Rank Adaptation）是目前最流行的参数高效微调方法。其核心思想是：预训练模型在微调过程中的参数变化量 ΔW 是低秩的，因此可以用两个小矩阵 A、B 的乘积来近似：

**ΔW = BA**，其中 B ∈ ℝ^(d×r)，A ∈ ℝ^(r×k)，秩 r ≪ min(d, k)

![LoRA 低秩适配示意图](/images/finetuning-lora-zh.svg)

- 训练参数极少（通常只有原模型的 0.1%–1%）
- 推理时可将 BA 合并回 W₀，**零额外延迟**
- 效果接近甚至媲美全量微调

### 2021年：提示微调（Prefix Tuning / Prompt Tuning）

提示微调方法在模型的输入前插入一组可训练的连续向量（Prefix / Soft Prompt），通过只训练这些向量来引导模型完成特定任务，模型本身的参数完全冻结。

![Prompt Tuning vs P-tuning v2 对比](/images/finetuning-prompt-tuning-comparison.svg)

- 冻结模型参数，只训练提示向量，参数量极小
- 训练成本极低
- 在模型规模较小时效果一般，规模越大效果越好

### 2022年：指令微调（Instruction Fine-Tuning）

指令微调将不同任务统一格式化为（指令 + 输入 → 输出）的形式进行训练，使模型能够理解自然语言指令并完成多种任务。代表工作包括 FLAN、InstructGPT 等。

![三种范式对比：Pretrain-Finetune / Prompting / Instruction Tuning](/images/finetuning-instruction-abc.svg)

指令微调的优势：
- 统一任务格式，显著提升模型的指令跟随能力
- 大幅提升零样本（Zero-shot）和少样本（Few-shot）泛化能力
- 让模型真正"听懂"人类意图

### 2022年末至2023年：强化对齐（RLHF）

随着 ChatGPT 的出现，基于人类反馈的强化学习（RLHF）成为主流对齐方法，使模型输出更加符合人类偏好。

![RLHF 三步流程](/images/finetuning-rlhf-steps.svg)

主要流派包括：

- **SFT（监督微调）**：先用高质量指令数据做基础监督微调
- **RLHF**：训练奖励模型，再用 PPO 算法优化策略模型，对齐人类偏好
- **DPO（直接偏好优化）**：无需奖励模型，直接从偏好数据优化，更简洁稳定
- **GRPO**：DeepSeek 提出的改进版强化学习算法，进一步提升训练效率

## 方法对比

| 方法 | 更新参数量 | 训练效率 | 任务效果 | 资源需求 | 典型代表 |
|------|-----------|---------|---------|---------|---------|
| 全参数微调 | 100% | 慢 | 最佳 | 高 | GPT/BERT 直接微调 |
| LoRA | 0.1%–1% | 快 | 接近全量 | 低 | LoRA、QLoRA |
| Adapter | ~3%–5% | 较快 | 较好 | 低 | Adapter Tuning |
| Prompt Tuning | <0.1% | 较快 | 一般 | 极低 | Prompt Tuning |
| Prefix Tuning | <1% | 较快 | 一般 | 低 | Prefix Tuning |
| 指令微调 | 可变 | 中 | 好 | 中 | FLAN、InstructGPT |
| RLHF / DPO | 可变 | 慢 | 优（对齐） | 高 | InstructGPT、ChatGPT |`,

    en: `Fine-tuning techniques have evolved from simple full-parameter updates to a rich ecosystem of Parameter-Efficient Fine-Tuning (PEFT) methods. Understanding this progression helps explain the design motivation and appropriate use cases for each approach.

## Background & Motivation

In the era of large models, full fine-tuning faces three core challenges:

**High compute cost**: Updating all parameters of a multi-billion parameter model demands enormous GPU memory and compute — out of reach for most researchers and small teams.

**Catastrophic forgetting**: After full fine-tuning on task-specific data, models can "forget" general knowledge learned during pre-training, reducing generalization ability.

**Data inefficiency**: Many downstream tasks have limited labeled data. Full fine-tuning easily overfits on small datasets.

These three motivations together drove the rapid development of PEFT techniques.

## Timeline & Key Methods

### 2018 and Earlier: Full Fine-Tuning

Full Fine-Tuning updates all parameters of the pre-trained model on downstream task data. It is the original transfer learning approach.

- Best possible performance — the upper bound for other methods
- Slow training with high GPU memory requirements
- Each downstream task requires storing a complete separate model copy

### 2019: Feature Extraction

Feature extraction freezes most of the pre-trained model's parameters and only trains the top classification head, treating the model as a fixed feature extractor.

![Feature extraction vs fine-tuning comparison](/images/finetuning-feature-extraction-zh.svg)

- Equivalent to only training a linear classifier — extremely fast
- Minimal resource requirements; suitable for small datasets
- Limited performance — cannot fully leverage the pre-trained model's representations

### 2019: Adapter Method

Introduced by Houlsby et al., the Adapter method inserts lightweight Adapter modules after each Transformer sub-layer (Self-Attention and FFN). Only these new modules are trained.

![Adapter architecture diagram](/images/finetuning-adapter-architecture.svg)

- Only ~1%–5% of additional parameters need to be trained
- High parameter efficiency; the original weights remain frozen
- Minor inference overhead (forward pass through Adapter layers)

### 2021: LoRA

LoRA (Low-Rank Adaptation) is currently the most popular PEFT method. The core idea: weight changes ΔW during fine-tuning are intrinsically low-rank, so they can be approximated by the product of two small matrices A and B:

**ΔW = BA**, where B ∈ ℝ^(d×r), A ∈ ℝ^(r×k), rank r ≪ min(d, k)

![LoRA low-rank adaptation diagram](/images/finetuning-lora-en.svg)

- Very few trainable parameters (typically 0.1%–1% of the original model)
- BA can be merged back into W₀ at inference — **zero extra latency**
- Performance approaches or matches full fine-tuning

### 2021: Prompt Tuning / Prefix Tuning

Prompt tuning methods prepend a set of trainable continuous vectors (soft prompts or prefixes) to the model input. Only these vectors are trained; all model weights remain frozen.

![Prompt Tuning vs P-tuning v2 comparison](/images/finetuning-prompt-tuning-comparison.svg)

- Only the prompt vectors are trainable — minimal parameter count
- Very low training cost
- Performance is weaker at smaller model scales; improves as model size grows

### 2022: Instruction Fine-Tuning

Instruction fine-tuning reformats diverse tasks into a unified (instruction + input → output) format, training models to follow natural language instructions across many tasks. Key works include FLAN and InstructGPT.

![Three paradigms: Pretrain-Finetune / Prompting / Instruction Tuning](/images/finetuning-instruction-abc.svg)

Advantages:
- Unified task format significantly improves instruction-following ability
- Greatly improves zero-shot and few-shot generalization
- Models learn to truly understand human intent

### Late 2022–2023: Reinforcement Alignment (RLHF)

With the emergence of ChatGPT, Reinforcement Learning from Human Feedback (RLHF) became the dominant alignment approach, making model outputs better aligned with human preferences.

![RLHF 3-step process](/images/finetuning-rlhf-steps.svg)

Key variants:

- **SFT (Supervised Fine-Tuning)**: Foundation step using high-quality instruction data
- **RLHF**: Train a reward model, then optimize the policy with PPO to align with human preferences
- **DPO (Direct Preference Optimization)**: Directly optimizes from preference pairs without a reward model — simpler and more stable
- **GRPO**: DeepSeek's improved RL algorithm with further efficiency gains

## Method Comparison

| Method | Params Updated | Training Speed | Task Performance | Resource Cost | Examples |
|--------|---------------|---------------|-----------------|--------------|---------|
| Full Fine-Tuning | 100% | Slow | Best | High | GPT/BERT direct |
| LoRA | 0.1%–1% | Fast | Near full | Low | LoRA, QLoRA |
| Adapter | ~3%–5% | Moderate | Good | Low | Adapter Tuning |
| Prompt Tuning | <0.1% | Fast | Moderate | Very low | Prompt Tuning |
| Prefix Tuning | <1% | Fast | Moderate | Low | Prefix Tuning |
| Instruction FT | Variable | Medium | Good | Medium | FLAN, InstructGPT |
| RLHF / DPO | Variable | Slow | Best (aligned) | High | ChatGPT, InstructGPT |`,
  },
}

export const lora: TopicContent = {
  id: 'lora',
  title: { en: 'LoRA Fine-Tuning', zh: 'LORA微调' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}

export const qlora: TopicContent = {
  id: 'qlora',
  title: { en: 'QLoRA', zh: 'QLora' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}

export const adalora: TopicContent = {
  id: 'adalora',
  title: { en: 'AdaLoRA', zh: 'AdaLora' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}

export const promptTuning: TopicContent = {
  id: 'prompt-tuning',
  title: { en: 'Prompt Tuning', zh: '提示微调' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}

export const rlhf: TopicContent = {
  id: 'rlhf',
  title: { en: 'RLHF', zh: 'RLHF' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}

export const sft: TopicContent = {
  id: 'sft',
  title: { en: 'Supervised Fine-Tuning (SFT)', zh: 'SFT监督微调' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}

export const ppo: TopicContent = {
  id: 'ppo',
  title: { en: 'PPO', zh: 'PPO' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}

export const dpo: TopicContent = {
  id: 'dpo',
  title: { en: 'DPO', zh: 'DPO' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}

export const grpo: TopicContent = {
  id: 'grpo',
  title: { en: 'GRPO', zh: 'GRPO' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}
