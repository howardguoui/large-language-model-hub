import type { TopicContent } from '../types'

export const dataPreparation: TopicContent = {
  id: 'data-preparation',
  emoji: '🍓',
  title: { en: 'Data Preparation', zh: '数据准备' },
  contentType: 'article',
  content: {
    en: `## Common Data Sources

1. **WebText**
   - Requires attention to copyright and legality, while selecting high-quality content.
2. **Common Crawl**
   - Open-source web scraped data with broad coverage and massive text volume.
   - The quality of raw data varies greatly and requires strict cleaning.
3. **Books, Papers, and Code**
   - BooksCorpus, open-source GitHub code, etc., provide structured and specialized content.
   - This data helps the model learn long-text logic, professional knowledge, and code semantics.

## The Importance of Data Cleaning

Feeding raw data directly to the model for training will cause many problems:
- Spam, advertisements, and low-quality text will affect model performance.
- Duplicate content can cause the model to overfit certain segments.
- Noise and non-standard text can cause the model to learn incorrect expressions.

Therefore, data cleaning is an indispensable step, including removing HTML tags, filtering low-quality web pages, standardizing text, and removing gibberish or non-target language content.

## Data Deduplication and Quality Control

During LLM training, duplicate data not only wastes computing power but also causes the model to memorize answers, reducing its generalization ability. Common methods include:

1. **Hash Deduplication**: Calculating text fingerprints (such as MinHash, SimHash) to quickly identify duplicate or highly similar content.
2. **Semantic Deduplication**: Using embedding vectors to calculate semantic similarity, removing content that has the same meaning but different expressions.
3. **Quality Control**: Scoring or filtering text content to ensure that the training data meets standards in grammar, logic, and diversity.

High-quality, deduplicated data allows the model to learn more valuable knowledge instead of simply repeating and memorizing.

## Data Augmentation and Synthesis

To improve the model's generalization ability and robustness, training data is often augmented or synthesized:

- **Text Augmentation**: Synonym replacement, random insertion or deletion, data noise simulation, etc. Especially useful for low-resource languages or specific tasks.
- **Cross-modal Synthesis**: Text+image, image+video, audio+text, etc., synthesizing multimodal training samples. For example, using existing images to generate text descriptions, or generating image+text pairs to train multimodal models.
- **Data Expansion**: For certain low-sample tasks, using generative models to generate additional training data to alleviate data scarcity.

These methods make the model more stable and reliable when facing various changes in the real world.

## Multilingual and Cross-modal Data

The universality of LLMs is reflected not only in task adaptation but also in **language and modality diversity**:
- **Multilingual Data**: Training not only on English but also covering multiple languages like Chinese, Spanish, French, and Arabic. Crucial for multilingual understanding, translation, and generation capabilities.
- **Cross-modal Data**: Mixed training of text, images, audio, and video allows the model to process complex real-world scenarios. For example, CLIP used a massive amount of image-text pairs during training. This cross-modal data enables the model to understand images by seeing text and understand text by seeing images.

Multilingual and cross-modal training ensures that LLMs not only understand a single language or a single type of data but truly possess broadly applicable capabilities.

## Summary

From a data perspective, the key to LLM training is not just large volume, but more importantly:
1. **Quality First**: Cleaning, deduplication, and quality control are the foundation.
2. **Diversity**: The diversity of languages, tasks, and modalities determines the model's general capabilities.
3. **Augmentation and Synthesis**: Moderate augmentation makes the model more stable and reliable.

It can be said that no matter how large the model is, if the data is not good enough, what is trained will only be theoretical. High-quality, rich, and multimodal data is the true source of an LLM's power.`,
    zh: `## 常见数据源

1. **WebText**
   - 需要注意版权和合法性，同时挑选质量较高的内容。
2. **Common Crawl**
   - 开源的网页抓取数据，覆盖面广，文本量巨大。
   - 原始数据质量参差不齐，需要经过严格清洗。
3. **Books、论文和代码**
   - BooksCorpus、GitHub开源代码等提供了结构化、专业化的内容。
   - 这些数据有助于模型学习长文本逻辑、专业知识和代码语义。

## 数据清洗的重要性

直接把原始数据喂给模型训练，问题会很多：
- 垃圾信息、广告、低质量文本会影响模型效果。
- 重复内容会导致模型过拟合某些片段。
- 噪声和不规范文本会让模型学到错误表达。

所以数据清洗是不可省略的一步，包括去除HTML标签、过滤低质量网页、标准化文本、去掉乱码或非目标语言内容等。

## 数据去重与质量控制

大模型训练时，重复数据不仅浪费算力，还会让模型记住答案，降低泛化能力。常用方法有：

1. **哈希去重**：计算文本指纹（如MinHash、SimHash）来快速发现重复或高度相似的内容。
2. **语义去重**：利用嵌入向量（Embedding）计算语义相似度，去掉意思重复但表达不同的内容。
3. **质量控制**：对文本内容进行打分或筛选，确保训练数据在语法、逻辑和多样性上满足标准。

高质量、去重后的数据能让模型学到更多有价值的知识，而不是简单重复记忆。

## 数据增强与合成

为了提升模型的泛化能力和鲁棒性，训练数据往往会做增强或合成处理：

- **文本增强**：同义词替换、随机插入或删除、数据噪声模拟等。在低资源语言或特定任务上尤其有用。
- **跨模态合成**：文本+图像、图像+视频、音频+文本等，通过合成生成多模态训练样本。例如，使用现有图像生成文本描述，或者生成图像+文本对用于训练多模态模型。
- **数据扩充**：对某些少量样本任务，通过生成式模型生成额外训练数据，缓解数据稀缺问题。

这些方法让模型在面对真实世界中各种变化时，更加稳定和可靠。

## 多语种与跨模态数据

大模型的通用性不仅体现在任务适应上，也体现在**语言和模态的多样性**：
- **多语种数据**：不仅训练英语，还要覆盖中文、西班牙语、法语、阿拉伯语等多种语言。对多语种理解、翻译和生成能力至关重要。
- **跨模态数据**：文本、图像、音频、视频混合训练，让模型能处理复杂现实场景。例如CLIP训练时就使用了大量图文对，这种跨模态数据让模型可以看到文字就理解图像，看到图像也能理解文字。

多语种和跨模态训练，使得大模型不仅懂一门语言或一个类型的数据，而是真正拥有广泛适用的能力。

## 总结

从数据层面看，大模型训练的关键不只是量大，更在于：
1. **质量优先**：清洗、去重和质量控制是基础。
2. **多样性**：语言、任务、模态的多样性决定模型的通用能力。
3. **增强与合成**：适度增强让模型更稳、更可靠。

可以说，模型再大，如果数据不够好，训练出来的也只能是纸上谈兵。而高质量、丰富、多模态的数据，才是大模型强大的真正源头。`
  }
}


export const dataStorage: TopicContent = {
  id: 'data-storage',
  emoji: '🫐',
  title: { en: 'Data Storage', zh: '数据存储' },
  contentType: 'article',
  content: {
    en: `## Data Pipeline and Storage Architecture: The New Bottleneck

In the era of large language models, AI training and inference are no longer purely a matter of **compute power**. With model parameters scaling into the tens of billions and data volumes expanding to TB~PB scales, **data pipelines and storage architecture** often become the determining factor affecting training speed. No matter how powerful the compute is, if data loading can't keep up, GPUs will end up idle waiting for I/O, greatly reducing training efficiency.

In practical deployments, data typically adopts a **three-tier "hot-warm-cold" architecture**:

- **Hot Layer**: Stores data and indices actively used during training. Has extreme requirements for IOPS and throughput. Common deployment uses local NVMe or high-performance distributed file systems.
- **Warm Layer**: Handles team sharing and version management. Generally uses object storage (e.g., Ceph, MinIO) or distributed file systems.
- **Cold Layer**: Archives long-term storage for historical versions and rarely accessed datasets. Uses cost-effective storage like cloud cold storage or tape.

This three-tier architecture is reflected in typical cluster deployments: **RW (read-write) and RO (read-only) nodes** at the top with **Shared Buffers** for each CPU, connected to a **SharedStorage** layer, ultimately backed by **OSS/HDFS/MinIO** object storage for cost-effective archival. Hot data flows from cold storage upward through compression and decompression steps, while reads are optimized by caching at each tier.

## File Formats and Version Management

For file formats, **sequential streamable containerized shards** are the mainstream choice, such as WebDataset (tar shards), TFRecord, Parquet, or LMDB. A reasonable shard size (typically between 100MB and 2GB) can reduce metadata overhead while balancing network bandwidth and node memory. To support reproducible and resumable training, establishing sample-level indices and global shuffle maps is required. Also important is avoiding invalid data amplification by using MinHash/SimHash for text and perceptual hashing for images.

Data **version management** should not be ignored. By versioning data packages (e.g., \`imagenet-1.0.3\`) and using tools like DVC or LakeFS, you can maintain consistency and traceability across "Data—Code—Model."

## Preprocessing and Augmentation: Offline vs Online

Preprocessing and data augmentation are another key to training efficiency. A general principle is: **do it offline if possible**.

- **Offline Processing**: Suitable for fixed procedures like decoding, normalization, tokenization, image resizing, or cropping. This significantly reduces CPU pressure during training and ensures stable data throughput. The advantages are high throughput and reusability, while the disadvantages are slightly reduced flexibility and more storage space consumption.
- **Online Processing**: More suitable for augmentation techniques requiring randomness or diversity, such as random cropping, color jittering, MixUp/CutMix, SpecAugment, etc. These operations clearly help model generalization and are often lightweight and vectorizable, so keeping them in the DataLoader stage is sufficient.

For NLP, tokenization and chunking can be done in advance to generate packed samples concatenated by context length. For images or video, frame indices and clip manifests can be built ahead of time to achieve zero-copy reads during training.

## Caching Strategies

To avoid GPU idling due to I/O bottlenecks, **cache design** is crucial.

### Page Cache and Memory-Mapped I/O

At the local machine level, full use of **Page Cache and mmap** should be made, as large sequential reads can dramatically increase cache hit rates. The operating system's page cache acts as a buffer between applications and disk:

- **(1) Pages Request**: Applications request pages through syscalls like `read()`, `pread()`, `readv()`, or leverage `mmap()` for file reads
- **(2) Cache Hit**: If the page is already in cache, it returns immediately without disk I/O
- **(3) Cache Miss**: On cache misses, the OS reads pages from the disk subsystem
- **Write Operations**: Pages are marked with dirty flags via syscalls like `write()`, `pwrite()`, `writev()`, and `mmap()` writes
- **Flush Mechanism**: Eventually flushed to disk via `pdflush`, `kswapd`, or sync flushes like `fsync()`/`msync()`

Additionally, prefetching shards from object storage to local NVMe SSDs for use as a short-term cache can significantly boost efficiency in the first training epoch. A common practice is warm-up before training, pre-pulling data for the first few epochs to prevent initial throughput fluctuations.

### Multi-tier Cluster Storage

At the cluster level, Redis, RocksDB, or Alluxio can be deployed as a shared caching layer for hot data and indices. The architecture typically follows a **three-tier storage hierarchy**:

- **Hot Tier (RW/Read-Only Nodes)**: Shared Buffers with read/write access to high-speed in-memory caches per CPU. Supports IOPS-intensive access patterns.
- **Warm Tier (SharedStorage)**: Mid-tier shared storage layer for distributed access, supporting reads across multiple nodes.
- **Cold Tier (OSS/HDFS/MinIO)**: Compressed object storage for long-term archival, with decompression on read. Lowest cost but highest latency.

Cache consistency can be managed through data version numbers, with asynchronous cleanup or version eviction after training tasks complete to ensure resource utilization.

A neat trick is to try to **use sequential reads and large-batch prefetches instead of frequent small-block random I/O**, which is particularly important for distributed training.

## Accelerating Data Loading and Pipeline Parallelism

Besides storage and caching, parallel optimization of data loading and training pipelines is equally important.

In **PyTorch**, efficiency can be improved by tuning DataLoader parameters: setting an appropriate \`num_workers\` (usually half to all CPU cores) and enabling \`pin_memory=True\`.
\`\`\`python
loader = torch.utils.data.DataLoader(
    dataset,
    batch_size=global_bs_per_rank,
    num_workers=8,
    pin_memory=True,
    prefetch_factor=2
)
\`\`\`

In **TensorFlow**, the automatic tuning feature of \`tf.data.AUTOTUNE\` simplifies parallelism and prefetch configurations.
\`\`\`python
ds = (tf.data.TFRecordDataset(files, num_parallel_reads=tf.data.AUTOTUNE)
      .map(parse_fn, num_parallel_calls=tf.data.AUTOTUNE)
      .prefetch(tf.data.AUTOTUNE))
\`\`\`

For remote object storage, utilizing utilities like fsspec/s3fs/gcsfs paired with large shard objects and range reads is recommended to avoid frequent small-file accesses. The streaming modes of WebDataset or Hugging Face Datasets also effectively relieve local storage pressure.

Furthermore, LLM training often uses **packed samples** techniques to concatenate multiple short sequences into long sequences close to the target context length, thereby increasing GPU/TPU utilization. Across epochs, randomness and reproducibility are guaranteed through multiple shuffle maps.

## Network and Scheduling

Finally, the impact of the network and scheduling levels on training throughput cannot be ignored. Topology-aware scheduling ensures training nodes are located as close to data storage gateways as possible, reducing latency and costs associated with crossing racks or availability zones. High-speed interconnects (like RDMA, InfiniBand, RoCE) ensure that gradient communication and data I/O do not compete for bandwidth.

When budgeting bandwidth, a preliminary estimation formula is: **Per GPU sample size × QPS × Number of nodes**, leaving a 20%~30% margin. If bottlenecks are found, throttling and backpressure mechanisms can be added at the data entry point to prevent cluster overload.`,
    zh: `## 数据管线与存储架构：新的瓶颈

在大模型时代，AI 的训练与推理已经不再是单纯的**算力问题**。随着模型参数规模进入百亿级、数据量级扩展到 TB~PB，**数据管线与存储架构**往往成为影响训练速度的决定性因素。算力再强，如果数据加载跟不上，也会出现 GPU 空闲等待 I/O 的情况，训练效率大打折扣。

在实际落地中，数据通常采用"**热、温、冷**"三层架构：

- **Hot 层（热层）**：存放的是训练时活跃的数据和索引，对 IOPS 和吞吐有极高要求，常见部署方式是本地 NVMe 或高性能分布式文件系统。
- **Warm 层（温层）**：承担团队共享和版本管理，一般使用对象存储（如 Ceph、MinIO）或分布式文件系统。
- **Cold 层（冷层）**：长期存储历史版本和低频访问数据，通常采用成本低廉的云冷存或磁带存储。

这种三层架构在实际集群部署中体现为：顶部的 **RW（读写）和 RO（只读）节点**各有 **Shared Buffers**，连接到 **SharedStorage** 中间层，最终由 **OSS/HDFS/MinIO** 对象存储作为成本优化的归档后端。热数据从冷存向上流动，经过压缩与解压步骤，而读取操作则通过各层缓存优化。

## 文件格式与版本管理

在文件格式上，**顺序可流式读取的容器化分片**是主流选择，如 WebDataset（tar 分片）、TFRecord、Parquet 或 LMDB。合理的分片大小（通常在 100MB~2GB 之间）既能降低元数据开销，又能兼顾网络带宽与节点内存。为了支持可重复、可恢复训练，还需要建立样本级索引和全局 shuffle map。同样重要，文本可以使用 MinHash/SimHash，图像可用感知哈希，避免无效数据放大。

数据的**版本管理**也不可忽视。通过数据按版本打包（如 \`imagenet-1.0.3\`），配合 DVC 或 LakeFS 等工具，可以让“数据—代码—模型”保持一致性和可追溯性。

## 预处理与增广：离线 vs 在线

预处理和数据增强是训练效率的另一大关键。一个普遍的原则是：**能离线就离线**。

- **离线处理**：适合完成解码、标准化、分词、图像 resize 或裁剪等固定流程，这样能显著降低训练时的 CPU 压力，并保证数据吞吐稳定。其优势是吞吐高、复用性强，缺点是灵活性略差、存储空间消耗稍多。
- **在线处理**：更适合需要随机性或多样化的增强手段，比如随机裁剪、颜色抖动、MixUp/CutMix、SpecAugment 等。这类操作对模型泛化能力帮助明显，且往往轻量、可矢量化，因此保留在 DataLoader 阶段即可。

对于 NLP，可以提前完成分词、分块，生成按上下文长度拼接的 packed samples；对于图像或视频，可以提前建立帧索引和 clip manifest，实现训练时的零拷贝读取。

## 缓存策略

为了避免 GPU 因 I/O 停摆，**缓存设计**至关重要。

### Page Cache 与内存映射 I/O

在本地机器层面，可以充分利用 **Page Cache 和 mmap**，大块顺序读能极大提升缓存命中率。操作系统的页缓存充当应用程序和磁盘之间的缓冲：

- **(1) 页面请求**：应用通过 `read()`、`pread()`、`readv()` 等系统调用请求页面，或通过 `mmap()` 进行文件读取
- **(2) 缓存命中**：如果页面已在缓存中，立即返回，无需磁盘 I/O
- **(3) 缓存缺失**：缓存未命中时，操作系统从磁盘子系统读取页面
- **写操作**：通过 `write()`、`pwrite()`、`writev()` 和 `mmap()` 写操作将页面标记为 dirty
- **刷盘机制**：最终通过 `pdflush`、`kswapd` 或同步刷新（`fsync()`/`msync()`）写回磁盘

同时，将对象存储中的分片预拉取到本地 NVMe，作为短期缓存使用，也能明显提升首轮训练效率。常见做法是训练前做 warm-up，提前拉取头几个 epoch 所需数据，避免初期吞吐波动。

### 多层集群存储架构

在集群层面，可以部署 Redis、RocksDB 或 Alluxio 作为热点数据和索引的共享缓存层。存储架构通常遵循**三层存储层级**：

- **热层（RW/只读节点）**：每个 CPU 的共享缓冲区，支持读写访问的内存缓存。适应 IOPS 密集型访问模式。
- **温层（SharedStorage）**：中层共享存储，支持跨多节点的分布式读取。
- **冷层（OSS/HDFS/MinIO）**：压缩对象存储用于长期归档，读取时解压。成本最低但延迟最高。

缓存一致性可通过数据版本号来管理，训练任务完成后再异步清理或逐版本淘汰，保证资源利用率。

一个小技巧是尽量**使用顺序读和大批量 prefetch，而不是频繁的小块随机 I/O**，这对分布式训练尤其重要。

## 加速数据加载与管线并行

除了存储与缓存，数据加载和训练管线的并行优化同样重要。

在 **PyTorch** 中，可以通过调整 DataLoader 参数来提升效率：合理设置 \`num_workers\`（通常为 CPU 核数的一半到等于核数）、开启 \`pin_memory=True\`。
\`\`\`python
loader = torch.utils.data.DataLoader(
    dataset,
    batch_size=global_bs_per_rank,
    num_workers=8,
    pin_memory=True,
    prefetch_factor=2
)
\`\`\`

在 **TensorFlow** 中，\`tf.data.AUTOTUNE\` 的自动调优功能可以简化并行与预取配置。
\`\`\`python
ds = (tf.data.TFRecordDataset(files, num_parallel_reads=tf.data.AUTOTUNE)
      .map(parse_fn, num_parallel_calls=tf.data.AUTOTUNE)
      .prefetch(tf.data.AUTOTUNE))
\`\`\`

对于远程对象存储，推荐配合 fsspec/s3fs/gcsfs 等工具，结合分片大对象和范围读取，避免频繁小文件访问。WebDataset 或 Hugging Face Datasets 的流式模式，也能很好地缓解本地存储压力。

另外，大模型训练常常采用 **packed samples** 技术，将多个短序列拼接为接近目标上下文长度的长序列，提高 GPU/TPU 的利用率。跨 epoch 时，通过多份 shuffle map 保证随机性与可复现性。

## 网络与调度

最后，网络与调度层面对训练吞吐的影响不容忽视。拓扑感知调度可以让训练节点尽量靠近数据存储网关，减少跨机架或跨可用区的延迟和费用。高速互联（如 RDMA、InfiniBand、RoCE）则能保证梯度通信和数据 I/O 不相互抢占带宽。

在做带宽预算时，可以先估算公式：**每 GPU 样本大小 × QPS × 节点数**，并预留 20%~30% 的余量。如果发现瓶颈，可以在数据入口增加节流与回压机制，防止集群过载。`
  }
}

export const gpuVsTpu: TopicContent = {
  id: 'gpu-vs-tpu',
  emoji: '🥝',
  title: { en: 'GPU vs TPU', zh: 'GPU vs TPU' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}

export const mixedPrecision: TopicContent = {
  id: 'mixed-precision',
  emoji: '🍅',
  title: { en: 'Mixed Precision Training', zh: '混合精度计算' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}

export const parallelTraining: TopicContent = {
  id: 'parallel-training',
  emoji: '🫒',
  title: { en: 'Data / Model / Hybrid Parallelism', zh: '数据并行VS模型并行VS混合并行' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}

export const distributedPrinciples: TopicContent = {
  id: 'distributed-principles',
  emoji: '🥥',
  title: { en: 'Distributed Training Principles & Architecture', zh: '分布式训练原理与基础架构' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}

export const dataParallelPractice: TopicContent = {
  id: 'data-parallel-practice',
  emoji: '🥑',
  title: { en: 'Data Parallel Training in Practice', zh: '数据并行训练实践' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}

export const modelParallelStrategy: TopicContent = {
  id: 'model-parallel-strategy',
  emoji: '🍆',
  title: { en: 'Model Parallel Training Strategy', zh: '模型并行训练策略' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}

export const zeroSeries: TopicContent = {
  id: 'zero-series',
  emoji: '🥔',
  title: { en: 'ZeRO Series Analysis', zh: 'ZeRO系列解析' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}

export const distributedCommunication: TopicContent = {
  id: 'distributed-communication',
  emoji: '🥕',
  title: { en: 'Distributed Communication Optimization', zh: '分布式通信优化' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}

export const distributedFramework: TopicContent = {
  id: 'distributed-framework',
  emoji: '🌽',
  title: { en: 'Distributed Training Frameworks', zh: '大模型分布式训练框架' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}
