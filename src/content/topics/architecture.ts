import type { TopicContent } from '../types'

export const transformer: TopicContent = {
  id: 'transformer',
  emoji: '🍌',
  title: { en: 'Original Transformer Architecture', zh: '原始 Transformer 结构回顾' },
  contentType: 'article',
  content: {
    en: `### Recap of Original Transformer Architecture

Before discussing large model architectures, it is necessary to review the **Transformer**—the core foundation of modern large models. Understanding the Transformer is crucial for understanding GPT, BERT, and various multimodal large models.

#### Why Transformer?
Before the Transformer appeared, the NLP field mainly relied on Recurrent Neural Networks (RNN) or Long Short-Term Memory (LSTM) to process sequence data. Although these models can capture sequence information, they had two main problems:
1. **Difficulty in capturing long-distance dependencies**: As sentences get longer, information transmission decays, and it is hard for the model to effectively remember earlier context.
2. **Low training efficiency**: RNNs must be computed sequentially and cannot be trained in parallel, leading to slow training speeds.

In 2017, Vaswani et al. proposed the Transformer. It entirely abandoned RNNs and convolutional structures, relying solely on the **Attention mechanism**, which solved these two problems.

#### Core Structure of Transformer
The overall structure of the Transformer is divided into two parts: the **Encoder** and the **Decoder**, with each part consisting of several stacked layers.

![Transformer Architecture](/images/transformer-architecture.jpg)

##### Encoder
Each encoder layer mainly includes two modules:
1. **Self-Attention**: Every position in the input sequence can attend to other positions in the sequence, capturing long-distance dependencies.
2. **Feed-Forward Network (FFN)**: Each position independently passes through a two-layer fully connected network to enhance non-linear expression capabilities.

The encoder also uses **Residual Connections** and **Layer Normalization** to stabilize training.

##### Decoder
Each decoder layer includes three modules:
1. **Masked Self-Attention**: To ensure that the model can only see already generated words during generation, a mask mechanism is used to prevent looking into the future.
2. **Encoder-Decoder Attention (Cross-Attention)**: The decoder attends to the encoder's output, achieving alignment between the input information and the generated content.
3. **Feed-Forward Network (FFN)**.`,
    zh: `### 原始 Transformer 结构回顾

在谈大模型架构之前，有必要回顾一下 **Transformer** ——它是现代大模型的核心基础。理解Transformer，对于理解GPT、BERT以及各种多模态大模型都非常关键。

#### 为什么会有Transformer
在Transformer出现之前，NLP领域主要依赖循环神经网络（RNN）或长短期记忆网络（LSTM）处理序列数据。这些模型虽然可以捕捉序列信息，但存在两个主要问题：
1. **长距离依赖难捕捉**：当句子变长时，信息传递会衰减，模型很难保持对前文的有效记忆。
2. **训练效率低**：RNN必须按顺序计算，无法并行训练，导致训练速度慢。

2017年，Vaswani等人提出了Transformer，它摒弃了RNN和卷积结构，完全基于**注意力机制（Attention）**，解决了这两个问题。

#### Transformer的核心结构
Transformer的整体结构分为两部分：**编码器（Encoder）和解码器（Decoder）**，每个部分由若干层堆叠而成。

![Transformer核心结构](/images/transformer-architecture.jpg)

##### 编码器（Encoder）
每一层编码器主要包括两个模块：
1. **自注意力机制（Self-Attention）**：输入序列的每个位置都可以关注序列中的其他位置，捕捉长距离依赖关系。
2. **前馈全连接网络（Feed-Forward Network, FFN）**：每个位置独立通过两层全连接网络，增强非线性表达能力。

编码器还使用**残差连接（Residual Connection）**和**层归一化（Layer Normalization）**来稳定训练。

##### 解码器（Decoder）
解码器的每一层包含三个模块：
1. **自注意力机制（Masked Self-Attention）**：为了保证生成时只能看到已生成的词，使用掩码（Mask）机制防止看未来。
2. **编码器-解码器注意力（Cross-Attention）**：解码器通过注意力关注编码器的输出，实现输入信息和生成内容的对齐。
3. **前馈全连接网络（FFN）**。`
  },
}

export const moe: TopicContent = {
  id: 'moe',
  emoji: '🍍',
  title: { en: 'Mixture of Experts (MoE)', zh: 'MOE混合专家架构' },
  contentType: 'article',
  content: {
    en: `### Mixture of Experts (MoE) Architecture

As the parameter scale of Large Language Models (LLMs) grows from billions to hundreds of billions or even trillions, how to save computing power while maintaining performance has become a core research question.

The MoE (Mixture of Experts) architecture emerged precisely in this context.

The core philosophy of MoE is: "For each input to the model, only activate part of the modules, allowing the neural network to 'use part of its brain' during each inference."

This greatly reduces the amount of computation while maintaining or even improving model performance.

#### What is MoE?

MoE (Mixture of Experts) is a sparse activation architecture. Its core idea is that in a certain layer of the model, instead of using all sub-networks (experts), it selects a small subset of "experts" to participate in the forward computation.

Just like when you ask a question, you don't need every expert to answer; you just need to pick a few suitable experts.

#### MoE Architecture Diagram

\`\`\`text
┌────────────┐
\`\`\`

#### How Does MoE Work?

In a given MoE layer, the model contains multiple Experts (expert sub-networks) and a Gating Network:

- **Step 1: Input token**
  For example, if you have the sentence "Hello world", after embedding, each token is a vector.
- **Step 2: Gating function selects experts**
  The gating network decides which experts to activate for each token, usually using a softmax/Top-k strategy.
- **Step 3: Only activate Top-k experts**
  Usually, only k=1 or 2 experts are activated (for example, selecting 2 out of 16 experts), which greatly saves computation.
- **Step 4: Aggregate outputs**
  The activated experts perform forward propagation on the input, and their results are weighted and summed according to the gating scores to obtain the final output.

#### Why does MoE save computation?
(To be continued)`,
    zh: `### MOE混合专家架构

随着大语言模型（LLM）参数规模从十亿级增长到千亿、万亿级，如何在保持性能的同时节省算力，成为研究的核心问题。

MoE（Mixture of Experts, 混合专家）架构正是在这种背景下应运而生。

MoE 的核心理念是：“模型的每个输入，只激活部分模块，让神经网络在每一次推理中‘用一部分大脑’。”

这大大减少了计算量，同时还能保持甚至提升模型性能。

#### 什么是 MoE？

MoE（Mixture of Experts）是一种稀疏激活（sparse activation）架构，其核心思想是在模型的某一层，不使用全部子网络（专家），而是选择其中一小部分“专家”来参与前向计算。

就像你问一个问题时，不需要每个专家都来回答，只要挑几个合适的专家来就行了。

#### MoE 的整体结构图

\`\`\`text
┌────────────┐
\`\`\`

#### MoE 是怎么工作的？

在某个 MoE 层中，模型会包含多个 Expert（专家子网络），以及一个 Gating Network（门控网络）：

- **步骤 1：输入 token**
  比如你有一个句子“Hello world”，经过 embedding 后每个 token 是一个向量。
- **步骤 2：Gating 函数选择专家**
  门控网络对每个 token 决定要激活哪些专家，通常用 softmax/Top-k 策略。
- **步骤 3：只激活 Top‑k 个专家**
  通常只激活 k=1 或 2 个专家（比如从 16 个专家中选择 2 个），大大节省计算量。
- **步骤 4：将输出聚合**
  被激活的专家对输入进行前向传播，其结果根据门控打分进行加权求和，得到最终输出。

#### 为什么 MoE 能节省计算？
（未完）`
  },
}

export const gptSeries: TopicContent = {
  id: 'gpt-series',
  emoji: '🥭',
  title: { en: 'GPT Series', zh: 'GPT系列' },
  contentType: 'article',
  content: {
    en: `### GPT Series

GPT can be said to be incredibly popular, genuinely changing our work and lives.
From writing code and copy, to generating images, chatting, and doing analysis, the GPT series of models has undoubtedly become the representative achievement of Artificial General Intelligence (AGI).

#### GPT-1: The Beginning of General Language Understanding Models

In the era before deep learning became widespread, the field of Natural Language Processing (NLP) faced a common challenge: most models heavily relied on large amounts of manually labeled data. This not only consumed human and material resources but also limited the model's performance in low-resource scenarios. In stark contrast, there is a massive amount of unlabeled text data on the internet. If we could use these unlabeled corpora to learn the deep connections of language, could we train a general, powerful language model capable of transfer learning?

In 2018, OpenAI published a milestone paper.
The paper pointed out two core challenges:
1. How to design effective unsupervised optimization objectives?
2. How to transfer the knowledge learned unsupervised to downstream tasks?

To solve these two problems, GPT-1 proposed a general framework.

#### Unsupervised Pre-training

The goal of the pre-training phase is to train a general language model to capture the statistical structure and semantic knowledge of language from a large amount of unlabeled text. It used the BooksCorpus (containing over 7,000 novels) as training data. Continuous text structure helps the model learn contextual connections.

**1. Model Structure**
It used a 12-layer Transformer Decoder (note, it's a decoder, not a complete Encoder-Decoder), equipped with a self-attention mechanism, which can effectively capture long-distance dependencies.

Among them:
- \`h0\`: Input embedding vector, obtained by adding word embedding \`We\` and position embedding \`Wp\`
- \`We\`: Word vector matrix of the token
- \`Wp\`: Position encoding matrix (learned)
- \`hl\`: Output vector of the L-th layer of the Transformer
- \`TransformerBlock\`: A standard Transformer decoder block, containing multi-head self-attention and a feed-forward network
- \`P(u)\`: Probability distribution obtained by applying softmax to all words (i.e., the prediction result for the current token)

**2. Training Objective**
A standard language modeling task: predicting the next word.

Among them:
- \`L1(U)\`: The loss function for language modeling, the loss value for the entire unlabeled text corpus U
- \`U = {u_1, u_2, ..., u_n}\`: Unlabeled text sequence, where each \`ui\` is a token (word or subword)
- \`k\`: Context window size (indicating how many previous words the current word is predicted based on)
- \`P\`: The predicted probability of the current token \`ui\` given the previous \`k\` tokens, with parameters controlled by the model \`Θ\`
- \`Θ\`: All parameters of the model, including word vectors, Transformer layers, etc.

#### Supervised Fine-Tuning

After completing the general pre-training, the authors transfer the model to specific NLP tasks for fine-tuning, such as sentiment classification, natural language inference, question answering, etc.

**1. Task Adaptation Techniques**
One of the core advantages of the GPT-1 model is that it uses a unified architecture for different tasks. Since the input formats of different tasks vary (such as single sentences, sentence pairs, question-answering triplets), GPT-1 format them into a unified sequence.`,
    zh: `### GPT系列

GPT可以说是火的一塌糊涂，切切实实的改变了我们的工作和生活。
从写代码、写文案，到作图、聊天、做分析，GPT 系列模型已然成为通用人工智能的代表性成果。

#### GPT1：通用语言理解模型的开端

在深度学习尚未普及的年代，自然语言处理（NLP）领域面临一个普遍难题：大多数模型都严重依赖大量人工标注的数据，这不仅耗费人力物力，还限制了模型在低资源场景下的表现。而与此形成鲜明对比的是，互联网上存在海量未标注的文本数据。如果能利用这些无标签语料学习语言的深层联系，我们是否能训练出通用、强大、具备迁移能力的语言模型？

2018 年，OpenAI 发布了里程碑式论文。论文指出了两大核心挑战：
1. 如何设计有效的无监督优化目标？
2. 如何将无监督学习到的知识迁移到下游任务？

为了解决这两个问题，GPT-1 提出了一个通用的框架。

#### 无监督预训练

预训练阶段的目标是训练一个通用语言模型，从大量未标注文本中捕捉语言的统计结构与语义知识。使用了BooksCorpus（包含 7000 多本小说）作为训练数据，连续文本结构有助于模型学习上下文联系。

**1. 模型结构**
使用了一个 12 层的 Transformer Decoder（注意，是解码器而非完整的 Encoder-Decoder），具备自注意力机制，能有效捕捉长距离依赖。

其中：
- \`h0\`：输入嵌入向量，由词嵌入\`We\`和位置嵌入\`Wp\`相加得到
- \`We\`：token 的词向量矩阵
- \`Wp\`：位置编码矩阵（learned）
- \`hl\`：第 L层 Transformer 的输出向量
- \`TransformerBlock\`：一个标准 Transformer 解码器块，包含多头自注意力和前馈网络
- \`P(u)\`：对所有词进行 softmax 得到的概率分布（即当前 token 的预测结果）

**2. 训练目标**
标准的语言建模任务，预测下一个单词。

其中：
- \`L1(U)\`：语言建模的损失函数，对整个未标注文本语料 U 的损失值
- \`U = {u_1, u_2, ..., u_n}\`：未标注的文本序列，每个 ui 是一个 token（词或子词）
- \`k\`：上下文窗口大小（表示当前词是基于前多少个词预测的）
- \`P\`：当前 token ui 在给定前 k 个 token 的条件下的预测概率，参数由模型 Θ 控制
- \`Θ\`：模型的全部参数，包括词向量、Transformer 层等

#### 有监督微调

在完成通用预训练之后，作者将模型迁移到具体的 NLP 任务中进行微调，例如情感分类、自然语言推理、问答等。

**1. 任务适配技巧**
GPT-1 模型的核心优势之一，是其使用了统一的架构。
由于不同任务的输入形式各不相同（如单句、句对、问答三元组），GPT-1 引入了统一序列转换，将所有的输入都规整为统一形式的序列。`
  },
}

export const llamaSeries: TopicContent = {
  id: 'llama-series',
  emoji: '🍎',
  title: { en: 'LLaMA Series', zh: 'LLAMA系列' },
  contentType: 'article',
  content: {
    en: `### LLaMA Series

After delving into the development of the GPT series models, we cannot help but ask: Is the future of large models inevitably "bigger is better"?

#### LLaMA 1

##### 1. What is LLaMA?

LLaMA (Large Language Model Meta AI) is a series of foundational language models released by Meta AI, with parameter sizes ranging from 7B to 65B.
The performance of LLaMA-13B has already surpassed GPT-3, while LLaMA-65B can rival PaLM-540B!

##### 2. What are the Technical Innovations?

LLaMA's powerful performance does not come from nowhere; it benefits from improvements made in several aspects:

**2.1 Architectural Optimization**
- **Pre-Normalization (Pre-Norm)**: Uses RMSNorm to improve training stability.
- **SwiGLU Activation Function**: Replaces ReLU to improve expressive capability.
- **RoPE Positional Encoding**: Uses Rotary Positional Encoding instead of absolute positional encoding to retain sequence information.
- **Efficient Attention Mechanism**: Uses optimized causal attention from xformers to reduce memory consumption.
- **Gradient Checkpointing and Parallel Training**: Saves GPU memory overhead, making the training of 65B possible.

**2.2 Public and Diverse Data Sources**

Unlike models such as GPT-3, LLaMA training is based entirely on public datasets.`,
    zh: `### LLAMA系列

在深入了解了 GPT 系列模型的发展脉络之后，我们不禁要问：大模型的未来一定是越大越强吗？

#### LLaMA 1

##### 一、LLaMA 是什么？

LLaMA（Large Language Model Meta AI）是 Meta AI 发布的一系列基础语言模型，参数规模从 7B 到 65B 不等。
LLaMA-13B 的性能已经超过了 GPT-3，而 LLaMA-65B 可以和 PaLM-540B 平起平坐！

##### 二、技术创新点有哪些？

LLaMA 的强大性能不是凭空而来的，而是得益于它在多个方面做出的改进：

**2.1 架构优化**
- **预归一化（Pre-Norm）**：使用 RMSNorm 提升训练稳定性；
- **SwiGLU 激活函数**：替代 ReLU，提高表达能力；
- **RoPE 位置编码**：用旋转位置编码代替绝对位置编码，保留序列信息；
- **高效注意力机制**：使用 xformers 中优化的因果注意力，降低内存消耗；
- **梯度检查点和并行训练**：节省显存开销，使训练 65B 成为可能。

**2.2 数据来源公开且多样**

与 GPT-3 等模型不同，LLaMA 训练完全基于公开数据集。`
  },
}

export const deepseekSeries: TopicContent = {
  id: 'deepseek-series',
  emoji: '🍏',
  title: { en: 'DeepSeek Series', zh: 'DeepSeek系列' },
  contentType: 'article',
  content: {
    en: `### DeepSeek Series

#### DeepSeek LLM

Large Language Models (LLMs) have become a critical path towards Artificial General Intelligence (AGI). Since ChatGPT ignited public attention, the open-source community has also been catching up constantly, releasing models like LLaMA, Mistral, Yi, etc., gradually narrowing the gap with closed-source models.
DeepSeek LLM is an open-source effort from DeepSeek-AI. It not only continues the high-level engineering practices in architecture, training scheduling, data processing, etc., but also further explores **how to optimize the scalability and performance of large models from a long-term perspective**.

##### 1. Model Parameter Configuration: Smooth Scaling from 7B to 67B
DeepSeek LLM offers two versions: 7B and 67B, which have 30 and 95 Transformer layers respectively. In terms of parameter scale, it benchmarks LLaMA, but makes key optimizations in detail design:
- Uses **PreNorm architecture**
- Activation function is **SwiGLU**
- Positional encoding uses **Rotary Embedding (RoPE)**
- 67B model uses **Grouped-Query Attention (GQA)**, significantly optimizing KV cache usage and inference efficiency

It is worth noting that DeepSeek did not simply widen the FFN, but rather by **increasing network depth**.

##### 2. Grouped-Query Attention (GQA): Key for Inference Cost Optimization
In traditional Multi-Head Attention, each attention head independently calculates three sets of vectors: query-key-value. As the model grows, the overhead of the KV cache expands rapidly.
DeepSeek 67B chose GQA to replace MHA:
- Sharing Key/Value significantly reduces KV cache occupation
- **Optimizes computational and memory requirements during inference** without significantly affecting model performance
- Compared to similar models using traditional MHA, **inference is faster under the same hardware resources**

This choice allows DeepSeek to be better deployed in various application scenarios and improves the model's cost-effectiveness during the deployment phase.

##### 3. Multi-step Learning Rate Scheduler: Laying the Foundation for Long-term Training
Unlike the cosine learning rate scheduler used by most LLMs, DeepSeek LLM introduces a **multi-stage learning rate**:

![DeepSeek Learning Rate Scheduler](/images/deepseek-learning-rate.jpg)

- Initial warm-up stage: gradually increase the learning rate for the first 2000 steps
- Mid stage: drop the learning rate to 31.6% after training 80% of tokens
- Late stage: drop again to 10% after training 90% of tokens

This strategy brings two direct benefits:
- **Supports staged training/continual training**, allowing future addition of data and re-finetuning
- **Smoother loss curve**, avoiding early oscillation and improving training stability

DeepSeek explicitly points out that while this strategy does not differ much in final performance compared to cosine scheduling, it is **more controllable in engineering and more conducive to long-cycle training**.

##### 4. Training Framework and Engineering Optimization: Behind-the-scenes Engineering Supporting Large Models
DeepSeek uses a self-developed efficient training framework **HAI-LLM**:
- Supports four parallel methods: 1F1B, tensor, data, and sequence
- Adopts Flash Attention and ZeRO-1 to optimize memory utilization
- Models trained in bf16 and accumulate gradients in fp32
- **Asynchronously saves weights and optimizer states every 5 minutes**, greatly reducing failure recovery costs
- Also supports **seamlessly resuming training** between different parallel configurations

DeepSeek LLM is not just another open-source model; it is a systematic exploration of LLM architecture and training methods from a long-term perspective. From architectural fine-tuning to large-scale training support, it demonstrates the tremendous progress of domestic open-source LLMs in engineering capabilities and model design. If you care about the inference efficiency, scalability, and deployment landing of large models, this architectural design is worth studying in depth.

#### DeepSeekMoE
As large language models continue to break through limits of scale, **Mixture-of-Experts (MoE)**... (To be continued)`,
    zh: `### DeepSeek系列

#### DeepSeek LLM

大语言模型（LLM）已经成为通往通用人工智能（AGI）的关键路径。自 ChatGPT 引爆公众关注后，开源社区也不断追赶，推出 LLaMA、Mistral、Yi 等模型，逐步缩小与闭源模型的差距。
DeepSeek LLM 是一项来自 DeepSeek-AI 的开源努力，不仅在架构、训练调度、数据处理等方面延续了高水准的工程实践，更进一步探索了**如何在长期主义视角下优化大模型的可扩展性与性能**。

##### 一、模型参数配置：从 7B 到 67B 的平滑扩展
DeepSeek LLM 提供两个版本：7B 和 67B，分别拥有 30 层与 95 层 Transformer 层，参数规模上对标 LLaMA，但在细节设计上做出了关键优化：
- 使用 **PreNorm 架构**
- 激活函数为 **SwiGLU**
- 位置编码采用 **Rotary Embedding（RoPE）**
- 67B 模型采用 **Grouped-Query Attention（GQA）**，大幅优化 KV 缓存使用和推理效率

值得注意的是，DeepSeek 并没有简单地加宽 FFN，而是通过**增加网络深度**。

##### 二、Grouped-Query Attention（GQA）：推理成本优化关键
在传统的 Multi-Head Attention 中，每个注意力头都要独立计算 query-key-value 三组向量，随着模型增大，KV 缓存的开销迅速膨胀。
DeepSeek 67B 选择了 GQA 替代 MHA：
- 共享 Key/Value 的方式大幅减少 KV 缓存占用
- 在不显著影响模型性能的前提下，**优化推理过程中的计算和显存需求**
- 对比使用传统 MHA 的同类模型，**在相同硬件资源下推理更快**

这一选择使得 DeepSeek 能更好地部署在多种应用场景中，并提高模型在部署阶段的性价比。

##### 三、多步学习率调度器：为长期训练奠定基础
不同于多数 LLM 使用的余弦学习率调度器，DeepSeek LLM 引入了**多阶段学习率**：

![DeepSeek 多阶段学习率](/images/deepseek-learning-rate.jpg)

- 初始热身阶段：前 2000 步逐步升高学习率
- 中期阶段：训练 80% token 后将学习率降至 31.6%
- 后期阶段：训练 90% token 后再次降至 10%

这一策略带来两个直接好处：
- **支持阶段性训练/持续训练（continual training）**，可在未来添加数据、重新微调
- **损失曲线更平稳**，避免早期震荡，提升训练稳定性

DeepSeek 明确指出，虽然这种策略与余弦调度相比最终性能差别不大，但在**工程上更可控、更有利于长周期训练**。

##### 四、训练框架与工程优化：支撑大模型运行的幕后工程
DeepSeek 使用自研的高效训练框架 **HAI-LLM**：
- 支持 1F1B、张量、数据、序列四种并行方式
- 采用 Flash Attention、ZeRO-1 优化内存利用率
- 模型以 bf16 训练、fp32 累积梯度
- **每 5 分钟异步保存权重与优化器状态**，极大减少故障恢复成本
- 此外还支持在不同并行配置间**无缝恢复训练**

DeepSeek LLM 不只是又一个开源模型，它是对长期主义视角下 LLM 架构与训练方式的系统性探索。从架构微调到大规模训练支持，它展示了国产开源 LLM 在工程能力与模型设计上的巨大进步。如果你关心大模型的推理效率、扩展性与部署落地，这份架构设计值得深入研究。

#### DeepSeekMoE
随着大语言模型不断突破规模极限，**Mixture-of-Experts（MoE）**……（未完待续）`
  },
}

export const longcatSeries: TopicContent = {
  id: 'longcat-series',
  emoji: '🍐',
  title: { en: 'LongCat Series', zh: 'LongCat系列' },
  contentType: 'article',
  content: {
    en: `### LongCat Series

#### LongCat-Video

Over the past few years, AI has shown us the miracle of language understanding. ChatGPT can write articles and Midjourney can draw pictures, but for machines to truly understand and predict the world, a deeper level of intelligence is needed—that is, a "World Model".

The so-called world model is to let AI no longer stay at the level of symbols and data, but be able to see the world like a human, understand physical laws, and deduce spatio-temporal logic. To achieve this, the most natural path is to let the model generate video. Because video itself is the sequence data closest to the real world: it contains geometry, semantics, physics, movement, and even emotion simultaneously.

Therefore, Meituan's LongCat team took the first step in exploring the world model—launching **LongCat-Video**, a forward-looking foundational video generation model.

![LongCat-Video Overview](/images/longcat-2.jpg)

##### 1. Unified Architecture

LongCat-Video is based on the **Diffusion Transformer (DiT)** architecture. Its biggest highlight is that it is a **multi-task unified model**.

![LongCat-Video Unified Architecture](/images/longcat-2.jpg)

The team did not reinvent the wheel separately for different tasks (text-to-video, image-to-video, video continuation), but rather differentiated the tasks through the innovative mechanism of "number of conditioning frames":
- Unconditional frame → Text-to-Video
- 1 condition frame → Image-to-Video
- Multi-condition frames → Video Extension

![LongCat-Video Generations](/images/longcat-3.jpg)

This design is very elegant, as it naturally forms a task loop for text-to-video / image-to-video / continuation, as if letting the model itself decide "whether to refer to historical frames".

**1.1 Text-to-Video**
On the T2V (Text-to-Video) task, LongCat-Video can generate **720p, 30 fps** high-definition videos, and can accurately understand the objects, characters, scenes, styles, and other elements described in the text.
Judging from the results, it has reached the open-source SOTA level in both semantic consistency and visual quality. In other words, the AI can truly capture the vibe of that "aerial tracking shot of the city at dusk".

**1.2 Image-to-Video: Making Static Paintings Move**
In the I2V task, the model can strictly preserve the main subject attributes, background relationships, and overall style of the reference image, while ensuring the dynamic process conforms to physical laws.
Whether the input is a character portrait, an oil painting, or a portrait photo, LongCat-Video can animate it naturally, rather than mechanically swaying a few frames.
It performs particularly well on two indicators: content consistency and dynamic smoothness.

**1.3 Video Extension: The Key to Minute-Level Long Videos**
This is also LongCat-Video's most differentiated capability.
The model can natively continue the video content based on multi-frame conditions, achieving cross-frame spatio-temporal consistency and the generation of physically reasonable long videos.
Thanks to the **Block-Causal Attention** mechanism and **GRPO** post-training strategy, the model can stably output coherent videos up to **5 minutes** long, with almost no quality degradation.

![LongCat-Video Video Extension Performance](/images/longcat-4.jpg)

Common long video problems—color drift, disjointed movements, picture collapse—have all been resolved.
Combined with Block Sparse Attention (BSA) and the condition token caching mechanism, LongCat-Video remains highly efficient even when processing long sequences of over 90 frames, truly breaking the industry bottleneck that "length and quality cannot be obtained simultaneously."

##### 2. Efficient Inference

The computational amount of long video generation is astounding. The Meituan team found a balance through triple optimization:

**2.1 Coarse-to-Fine (C2F) Generation**
First generate 480p low frame rate video, and then super-resolve it to 720p 30 fps using the LoRA module.

![LongCat-Video Coarse-to-Fine Generation](/images/longcat-4.jpg)

**2.2 Block Sparse Attention (BSA)**
Only calculate the top-r key block attention, reducing the computation amount to below 10%.

![LongCat-Video Block Sparse Attention](/images/longcat-5.jpg)

**2.3 Model Distillation (CFG + Consistency Distillation)**
Compresses inference steps from 50 to 16.

![LongCat-Video Model Distillation](/images/longcat-5.jpg)

Ultimately achieving a **10x inference speedup** while maintaining SOTA image quality—truly achieving "fast, stable, and clear".

##### 3. Evaluation Results

In public benchmarks such as VBench, LongCat-Video reaches SOTA levels in two core tasks: Text-to-Video and Image-to-Video, with a parameter scale of 13.6 billion.
The model leads comprehensively in dimensions such as text alignment, visual quality, motion coherence, and overall quality, demonstrating tremendous potential in the direction of world models.

Returning to the initial question — **to make AI truly understand the world, we must let it first "comprehend" the world.**
LongCat-Video is exactly the starting point towards this goal. It is not just a video generator, but a world simulator that can reconstruct physical laws in digital space. In the future, such models will become the foundation for scenarios like autonomous driving, embodied intelligence, and digital humans.
And for those of us learning AI and in the AI industry, it also reminds us: **at the end of the world model, it is not just the model, but the understanding of the world itself.**

---

#### LongCat-Flash-Omni

In 2025, when the multimodal wave was accelerating, Meituan once again delivered an amazing answer. Following LongCat-Flash-Chat and LongCat-Flash-Thinking, the LongCat series welcomes a new member — **LongCat-Flash-Omni**.

![LongCat-Flash Architecture](/images/longcat-1.jpg)

It is not only an important upgrade by the Meituan LongCat team following their large language model but also the first time the open-source community achieves a model integrating **"full modal coverage + end-to-end architecture + large parameter efficient inference"**.

##### 1. From Flash to Omni

The LongCat-Flash series has always been known for its **efficient architecture and ultimate response speed**. Omni builds upon this and takes a step from single input to "full-modal synergy."

**LongCat-Flash-Omni = Efficient Architecture + Multimodal Perception + Real-time Voice Interaction**

It integrates various input forms such as vision, audio, text, and video. Through the innovative **Shortcut-Connected MoE (ScMoE) architecture** (including zero-computation experts), it achieves a streaming interactive experience with millisecond-level low latency while maintaining massive parameter scale (total parameters 560 billion, activated 27 billion).

This means that even when facing audio and video inputs lasting several minutes, it can still achieve **real-time response and natural communication**.

##### 2. End-to-End Architecture

Unlike traditional multimodal models (which are often spliced together by independent perceptors + text models), LongCat-Flash-Omni adopts a fully **end-to-end integrated design**:
- **Vision Encoder**: Lightweight and efficient, with only about 600 million parameters
- **Audio Codec**: Supports voice perception and reconstruction, directly generating natural speech
- **Core LLM**: Directly processes multimodal tokens such as images, text, and voice
- **Streaming Inference Engine**: Supports 128K tokens context and 8 minutes of audio/video interaction

The key to this design is: all modalities are processed synergistically in a unified token space. The LLM is no longer a backend translation machine, but the **central processor of multimodal information**.

Therefore, Omni can not only "understand what the video is about," but also "understand your tone" and "read your expressions" during a conversation, achieving true "listen, look, speak, think" integrated intelligence.

##### 3. Progressive Multimodal Fusion

The biggest challenge for full multimodal models is that data distributions of different modalities are completely different. Omni's solution is **Progressive Early Fusion**.

It divides the complex multimodal learning process into six stages, starting from language and gradually incorporating auditory and visual capabilities:
- **Stage 0: Text Pre-training** — establishing language understanding basics
- **Stage 1: Voice Introduction** — aligning acoustic representations with the language feature space
- **Stage 2: Image-Text Fusion** — incorporating large-scale image-text alignment corpora
- **Stage 3: Video Understanding** — introducing dynamic video data, enhancing spatiotemporal reasoning
- **Stage 4: Context Expansion** — context window expanded to 128K tokens
- **Stage 5: Voice Alignment Training** — alleviating information loss from discrete tokens and improving voice fidelity

This layer-by-layer injection strategy allows Omni to achieve **true multimodal synergy** while maintaining stable text capabilities; modalities no longer hinder each other but enhance one another.

##### 4. Performance

In comprehensive evaluations (Omni-Bench, WorldSense), LongCat-Flash-Omni reached the most advanced state-of-the-art (SOTA) level in the open source community.
Its single modality and cross modality performances are equally impressive.

Moreover, Omni also performed outstandingly in end-to-end interaction scoring. Evaluated by 250 users and 10 experts, its naturalness and fluency scored **0.56 points higher than current best open source model Qwen3-Omni**, approaching closed source flagships.

##### 5. Efficient Inference

Another core breakthrough of Omni is maintaining millisecond-level response even under the 560-billion parameter scale. The secret resides in the combination of the ScMoE (Shortcut-Connected Mixture of Experts) architecture and "zero-computation experts."

- ScMoE allows the model to only activate partial experts (about 27 billion parameters), drastically reducing computing costs
- Zero computation experts allow routing layers to quickly skip redundant branches, enabling stream processing
- Combined with a "chunk-styled audio-visual feature interleaving mechanism" ensures the continuity and low latency of audio and video processing

Ultimately, Omni became the first system in the open-source realm to achieve **"Large Model + Real-Time Interaction"**.

The emergence of LongCat-Flash-Omni marks a turning point. AI is no longer just a language expert, but a true multimodal agent that can perceive the world. It can look at pictures, listen to sounds, understand tone, generate voice, and accomplish cross-modal reasoning within the same framework.

This is not only a technological upgrade, but also another important leap in the direction of world models: **from understanding text → understanding senses → understanding the world**.

When AI possesses multimodal perception capabilities, it also attains the sensory interface into embodied intelligence; multimodal intelligence is transitioning from stacked functionalities to unified understanding.`,
    zh: `### LongCat系列

#### LongCat-Video

过去几年，AI让我们见识了语言理解的奇迹。ChatGPT 能写文章、Midjourney 能画画，但让机器真正理解并预测世界，还需要更深一层的智能——那就是「世界模型」（World Model）。

所谓世界模型，就是让AI不再停留在符号和数据的层面，而是能像人一样看见世界、理解物理规律、推演时空逻辑。要做到这点，最自然的路径就是让模型去生成视频。因为视频本身是最接近真实世界的序列数据：它同时包含了几何、语义、物理、运动乃至情绪。

于是，美团 LongCat 团队迈出了探索世界模型的第一步——推出 **LongCat-Video**，一个面向未来的视频生成基础模型。

![LongCat-Video Overview](/images/longcat-2.jpg)

##### 一、统一架构

LongCat-Video 基于 **Diffusion Transformer (DiT)** 架构，最大亮点在于它是一个**多任务统一模型**。

![LongCat-Video Unified Architecture](/images/longcat-2.jpg)

团队并没有为不同任务（文生视频、图生视频、视频续写）单独造轮子，而是通过「条件帧数量」这一创新机制区分任务：
- 无条件帧 → 文本生成视频（Text-to-Video）
- 1 帧条件 → 图像生成视频（Image-to-Video）
- 多帧条件 → 视频续写（Video Extension）

![LongCat-Video Generations](/images/longcat-3.jpg)

这种设计非常优雅，相当于让模型自己决定“要不要参考历史帧”，自然地形成了文生/图生/续写的任务闭环。

**1.1 文本生视频**
在 T2V（Text-to-Video）任务上，LongCat-Video 可生成 **720p、30 fps** 高清视频，能准确理解文本中描述的物体、人物、场景、风格等要素。
从结果来看，它在语义一致性与视觉质量上都达到开源 SOTA 级别。换句话说，你描述的“黄昏下的城市航拍镜头”，AI 真的能拍出那种氛围感。

**1.2 图像生视频：让静态画动起来**
I2V 任务中，模型能严格保留参考图像的主体属性、背景关系与整体风格，同时让动态过程符合物理规律。
无论输入是一张角色立绘、一幅油画，还是一张人像照片，LongCat-Video 都能让它动得自然，而不是机械地摆动几帧。
在内容一致性和动态平滑性两项指标上，它的表现尤为突出。

**1.3 视频续写：分钟级长视频的关键**
这也是 LongCat-Video 最具差异化的能力。
模型可以基于多帧条件，原生续接视频内容，实现跨帧时序一致与物理运动合理的长视频生成。
得益于 **Block-Causal Attention** 机制与 **GRPO** 后训练策略，模型可稳定输出长达 **5 分钟** 的连贯视频，几乎无画质衰减。

![LongCat-Video Video Extension Performance](/images/longcat-4.jpg)

常见的长视频问题——色彩漂移、动作断裂、画质崩坏——都被有效解决。
配合块稀疏注意力（BSA）与条件 token 缓存机制，LongCat-Video 在处理 90 帧以上序列时依然高效，真正打破了“时长与质量不可兼得”的行业瓶颈。

##### 二、高效推理

长视频生成的计算量惊人，美团团队通过三重优化找到平衡：

**2.1 粗到精生成（C2F）**
先生成 480p 低帧率视频，再用 LoRA 模块超分到 720p 30 fps。

![LongCat-Video Coarse-to-Fine Generation](/images/longcat-4.jpg)

**2.2 块稀疏注意力（BSA）**
只计算 top-r 关键块注意力，计算量降到 10% 以下。

![LongCat-Video Block Sparse Attention](/images/longcat-5.jpg)

**2.3 模型蒸馏（CFG + 一致性蒸馏）**
将采样步骤从 50 步压缩至 16 步。

![LongCat-Video Model Distillation](/images/longcat-5.jpg)

最终实现 **10 倍推理速度提升**，同时保持 SOTA 画质——真正做到“又快又稳又清晰”。

##### 三、评测结果

在 VBench 等公开基准中，LongCat-Video 以 136 亿参数的体量，在 Text-to-Video 与 Image-to-Video 两项核心任务上均达 SOTA 水平。
模型在文本对齐、视觉质量、运动连贯性、整体质量等维度全面领先，展示出世界模型方向上强大的潜力。

回到最初的问题——**要让 AI 真正理解世界，我们得让它先“看懂”世界。**
LongCat-Video 正是迈向这一目标的起点。它不只是一个视频生成器，更是一个能在数字空间中重构物理规律的世界模拟器。未来，这种模型将成为自动驾驶、具身智能、数字人等场景的基础。
而对我们这些学习 AI 和在 AI 行业的人来说，它也提醒着我们：**世界模型的尽头，不只是模型，而是对世界本身的理解。**

---

#### LongCat-Flash-Omni

在多模态浪潮加速的 2025 年，美团再次交出了一份令人惊艳的答卷。继 LongCat-Flash-Chat 与 LongCat-Flash-Thinking 之后，LongCat 系列迎来了新成员——**LongCat-Flash-Omni**。

![LongCat-Flash Architecture](/images/longcat-1.jpg)

它不仅是美团 LongCat 团队在大语言模型之后的重要升级，更是开源社区首次实现**“全模态覆盖 + 端到端架构 + 大参数高效推理”**于一体的模型。

##### 一、从 Flash 到 Omni

LongCat-Flash 系列一直以**高效架构和极致响应速度**闻名，Omni 则在此基础上，迈出了从单一输入到“全模态协同”的一步。

**LongCat-Flash-Omni = 高效架构 + 多模态感知 + 实时语音交互**

它集成了视觉、音频、文本和视频等多种输入形式，并通过创新的 **Shortcut-Connected MoE（ScMoE）架构**（含零计算专家），在保持超大参数规模（总参数 5600 亿，激活 270 亿）的同时，实现了毫秒级低延迟的流式交互体验。

这意味着，即使是面对长达数分钟的音视频输入，它依然能做到**实时响应与自然交流**。

##### 二、端到端架构

不同于传统的多模态模型（往往由独立的感知器 + 文本模型拼接而成），LongCat-Flash-Omni 采用了完全**端到端的一体化设计**：
- **视觉编码器**：轻量高效，参数量仅约 6 亿；
- **音频编解码器**：支持语音感知与重建，直接生成自然语音；
- **核心 LLM**：直接处理图像、文本、语音等多模态 token；
- **流式推理引擎**：支持 128K tokens 上下文与 8 分钟音视频交互。

这种设计的关键在于：所有模态都在统一的 token 空间内协同处理，LLM 不再是后端翻译机，而是成为**多模态信息的中枢处理器**。

因此，Omni 不仅能“理解视频讲的是什么”，还能在对话中“听懂你的语气”“看懂你的表情”，实现真正的“听、看、说、想”一体化智能。

##### 三、渐进式多模融合

全模态模型的最大难题是——不同模态的数据分布完全不同。Omni 的解决思路是**渐进式早期多模融合训练（Progressive Early Fusion）**。

它把复杂的多模态学习过程分为六个阶段，从语言出发，逐步融入听觉与视觉能力：
- **阶段 0：文本预训练** —— 奠定语言理解基础；
- **阶段 1：语音引入** —— 对齐声学表征与语言特征空间；
- **阶段 2：图文融合** —— 加入大规模图像-文本对齐语料；
- **阶段 3：视频理解** —— 引入动态视频数据，提升时空推理；
- **阶段 4：上下文扩展** —— 上下文窗口拓展至 128K tokens；
- **阶段 5：语音对齐训练** —— 缓解离散 token 信息丢失，提升语音保真度。

这种逐层注入策略让 Omni 在保持稳定文本能力的同时，实现了**真正的全模态协同**，各模态之间不再相互牵制，而是互相增强。

##### 四、性能

在综合评估（Omni-Bench、WorldSense）中，LongCat-Flash-Omni 达到了开源最先进水平（SOTA）。
其单模态与跨模态表现同样亮眼。

不仅如此，Omni 在端到端交互评分中也表现突出，在 250 名用户与 10 名专家评测中，其自然度与流畅度比当前最优开源模型 **Qwen3-Omni 高出 0.56 分**，接近闭源旗舰。

##### 五、高效推理

Omni 的另一项核心突破，是在 5600 亿参数规模下依然保持毫秒级响应，秘诀在于 ScMoE（Shortcut-Connected Mixture of Experts）架构与“零计算专家”的组合。

- ScMoE 让模型只激活部分专家（约 270 亿参数），极大降低计算成本；
- 零计算专家让路由层可以快速跳过冗余分支，实现流式处理；
- 结合“分块式音视频特征交织机制”，保证音视频处理的连续性与低延迟。

最终，Omni 成为首个在开源范畴内实现**“大模型 + 实时交互”**的系统。

LongCat-Flash-Omni 的出现标志着一个转折点，AI 不再只是语言专家，而是一个能真正感知世界的多模态智能体，它能看图、能听声、能理解语气、能生成语音，并在同一框架下完成跨模态推理。

这不只是一次技术升级，更是世界模型方向的又一次重要跃迁：**从理解文字 → 理解感官 → 理解世界**。

当 AI 拥有了多模态感知能力，它也就拥有了通向具身智能的感知接口，多模态智能正在从功能叠加走向统一理解。`
  },
}

export const kimiSeries: TopicContent = {
  id: 'kimi-series',
  emoji: '🍑',
  title: { en: 'Kimi Series', zh: 'Kimi系列' },
  contentType: 'article',
  content: {
    en: `### Kimi Series

This article introduces two key technologies in the Kimi series: **Kimi Linear** and **Kimi K2 Thinking**, highlighting their innovations, performance, and engineering implementations.

#### Kimi Linear

1. **Kimi Linear's Innovation**: Kimi Linear is a hybrid linear attention architecture that surpasses the full attention architecture in multiple scenarios. Its superiority comes from the Kimi Delta Attention (KDA) module and hardware optimization.
2. **KDA Module**: KDA is the core of Kimi Linear, featuring a finer-grained gating mechanism that enhances the model's ability to capture long-sequence information and its overall expressiveness.
3. **Hybrid Architecture**: Kimi Linear combines KDA with Multi-Head Latent Attention (MLA), pre-training a model with 3B activated parameters and 48B total parameters, proving its feasibility in large-scale model training.
4. **Hardware Optimization**: A bespoke chunkwise algorithm was developed, reducing the computational load, achieving a 75% reduction in KV cache usage, and a 6-fold increase in 1M context decoding throughput.

#### Kimi K2 Thinking

Kimi K2 Thinking's design concept revolves around **"thinking + long-sequence tool call"** as the core, aiming to resolve the bottlenecks of traditional large language models in long-sequence tasks.

**K2's Performance and Engineering Implementation:**
- **Agentic Search/Browsing**: BrowseComp = 60.2% (far exceeding the human baseline of 29.2%), demonstrating K2's significant advantages in dynamic web retrieval, evidence aggregation, and long-term information tracking.
- **Coding/Engineering Capabilities**: SWE-Bench Verified = 71.3%; LiveCodeBench, OJ-Bench, etc., show its practical implementation capabilities in multi-language programming, algorithmic problems, and terminal interaction scenarios.
- **Multilingual/Multitask Generalization**: It shows robust performance across various tasks (MMLU, AIME, HMMT, etc.) in both no-tool and with-tool settings, indicating the horizontal generalization ability of the foundational reasoning model.

These achievements emphasize the tremendous impact of toolchains and thinking budgets on final capabilities—it is not simply about scaling up parameters, but constructing a coherent, long-term reasoning/tool framework.

**Core Contributions:**
The core contribution of Kimi K2 Thinking lies in **incorporating "thinking" and "tool calling" as two runtime resources into the model's design and evaluation scope**. Through engineering techniques (long context management, tool protocols, QAT, parallel sequence aggregation), it bridges the gap between laboratory capabilities and practical usability.
It is not merely scaling up the model size; it redefines how to **scale reasoning capabilities at test-time**: more thinking tokens, more tool steps, and a more robust reasoning loop.`,
    zh: `### Kimi系列

本文介绍了 Kimi 系列的两项核心技术：**Kimi Linear** 和 **Kimi K2 Thinking**，重点展示了它们的创新点、性能表现和工程实现。

#### Kimi Linear

1. **Kimi Linear 的创新**：Kimi Linear 是一种混合线性注意力架构（hybrid linear attention architecture），在多个场景下超越了全注意力（full attention）架构。它的优势来源于 Kimi Delta Attention（KDA）模块和硬件优化。
2. **KDA 模块**：KDA 是 Kimi Linear 的核心，具有更细粒度的门控机制，增强了模型捕捉长序列信息的能力和表达能力。
3. **混合架构**：Kimi Linear 将 KDA 与多头潜在注意力（Multi-Head Latent Attention, MLA）结合，预训练了一个拥有 3B 激活参数和 48B 总参数的模型，证明了其在大规模模型训练中的可行性。
4. **硬件优化**：开发了定制的 chunkwise 算法，降低了计算负载，实现了 KV cache 使用量降低 75%，并将 1M 上下文解码吞吐量提升了 6 倍。

#### Kimi K2 Thinking

Kimi K2 Thinking 的设计理念以“思考 + 长序列工具调用（thinking + long-sequence tool call）”为核心，旨在解决传统大语言模型在长序列任务中的瓶颈。

**K2 的性能与工程实现：**
- **Agentic 搜索/浏览**：BrowseComp = 60.2%（远超人类 baseline 29.2%），说明 K2 在动态网页检索、证据聚合、长期信息追踪上有显著优势。
- **编码/工程能力**：SWE-Bench Verified = 71.3%；LiveCodeBench、OJ-Bench 等显示在多语言编程、算法题、终端交互场景有实际落地能力。
- **多语言/多任务泛化**：报告中的多项任务（MMLU、AIME、HMMT 等）在 no-tool/with-tool 两种设定下都有稳健表现，表明基础思考模型的横向泛化能力。

这些成绩强调了工具链和思考预算对最终能力的巨大影响 —— 不是单纯把参数做大，而是构建长期一致的推理与工具框架。

**核心贡献：**
Kimi K2 Thinking 的核心贡献在于**把“思考”与“工具调用”两项运行时资源纳入模型设计与评测范畴**，并通过工程化手段（长上下文管理、工具协议、QAT、并行轨迹聚合）把实验室能力推进到可用水平。
它不是简单地把模型做大，而是重新定义了如何在**测试时（test-time）扩大推理能力**：更多的思考 token、更多的工具步数，以及更稳健的推理闭环。`
  },
}
