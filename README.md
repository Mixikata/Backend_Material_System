# Backend_material_system
金属材料分析系统后端部分，负责人陈梦洋
本代码库为中国矿业大学大创训练项目私有库，未经允许禁止使用转载

该项目是一个基于 **Spring Boot** 和 **MyBatis-Plus** 的后端材料管理系统，主要功能包括项目的分析、查询、删除和查看。以下是项目的主要特点和功能模块：

### 项目特点
1. **技术栈**：
   - **Java**：作为主要编程语言。
   - **Spring Boot**：用于快速构建后端服务。
   - **MyBatis-Plus**：简化数据库操作。
   - **Maven**：用于项目构建和依赖管理。
   - **Jackson**：用于 JSON 数据的序列化和反序列化。

2. **模块划分**：
   - **Controller 层**：处理 HTTP 请求，提供 RESTful API。
   - **Service 层**：封装业务逻辑。
   - **Mapper 层**：与数据库交互。
   - **Entity 层**：定义数据库表对应的实体类。
   - **Utils 和配置**：提供全局异常处理、JSON 映射配置等功能。

3. **功能点**：
   - **项目分析**：通过 `InvokeUtil` 工具对项目进行分析，并将结果存储到数据库。
   - **项目查询**：支持查询所有历史项目，并返回项目的详细信息。
   - **项目删除**：支持批量删除项目。
   - **项目查看**：查看单个项目的详细分析结果。

### 主要功能模块
1. **全局异常处理**：
   - 使用 `GlobalExceptionHandler` 捕获全局异常，返回统一的错误响应。

2. **自定义 JSON 映射**：
   - 使用 `JacksonObjectMapper` 配置 JSON 的序列化和反序列化规则，支持日期格式化和大数值转换。

3. **项目管理**：
   - `ProjectController` 提供了项目的增删查改接口。
   - `ProjectService` 和 `ProjectServiceImpl` 实现了项目的业务逻辑。
   - `ProjectMapper` 通过 MyBatis-Plus 提供数据库操作。

4. **实体类**：
   - `Project` 定义了项目的属性，如项目名称、分析结果、物理属性等。

5. **统一响应格式**：
   - 使用 `Result` 类封装 API 响应，提供成功和失败的统一返回格式。

### 项目结构
```
src/main/java/org/example/backend_material_system/
├── apiUtils/          // 工具类
├── common/            // 全局配置和通用类
├── config/            // 配置类
├── controller/        // 控制器层
├── entity/            // 实体类
├── mapper/            // 数据库映射层
├── service/           // 服务接口
├── serviceImpl/       // 服务实现类
└── BackendMaterialSystemApplication.java // 主启动类
```

### 运行方式
1. 确保已安装 **JDK 17** 和 **Maven**。
2. 配置数据库连接（如 MySQL）并创建相应的表。
3. 在项目根目录运行以下命令：
   ```bash
   mvn spring-boot:run
   ```
4. 访问 `http://localhost:8080` 测试 API 接口。

### 适用场景
该项目适用于材料管理相关的系统开发，支持对材料项目的分析、管理和查询，适合科研、工业等领域的材料数据管理需求。
