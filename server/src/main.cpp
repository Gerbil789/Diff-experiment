#include <drogon/drogon.h>
#include <fstream>
#include <filesystem>
#include <chrono>

int main()
{
    std::filesystem::create_directory("results");
    std::filesystem::create_directory("logs");

    drogon::app()
        .setDocumentRoot("./client")
        .setHomePage("index.html")
        .setLogPath("./logs")
        .setLogLevel(trantor::Logger::kInfo);

    // POST /api/results
    drogon::app().registerHandler("/api/results",
        [](const drogon::HttpRequestPtr& req, std::function<void(const drogon::HttpResponsePtr&)>&& callback) {
            auto jsonPtr = req->getJsonObject();
            if (!jsonPtr)
            {
                auto resp = drogon::HttpResponse::newHttpResponse();
                resp->setStatusCode(drogon::HttpStatusCode::k400BadRequest);
                resp->setBody("Invalid JSON payload");
                callback(resp);
                return;
            }

            // Save JSON file with timestamp
            auto now = std::chrono::duration_cast<std::chrono::microseconds>(std::chrono::system_clock::now().time_since_epoch()).count();
            std::string filename = "results/result_" + std::to_string(now) + ".json";

            std::ofstream outfile(filename);
            if (outfile.is_open())
            {
                Json::StreamWriterBuilder writer;
                writer["indentation"] = "  ";
                std::unique_ptr<Json::StreamWriter> jsonWriter(writer.newStreamWriter());
                jsonWriter->write(*jsonPtr, &outfile);
                LOG_INFO << "Saved submission to: " << filename;
            }
            else
            {
                LOG_ERROR << "Failed to open output file: " << filename;
            }

            Json::Value status;
            status["status"] = "saved";
            callback(drogon::HttpResponse::newHttpJsonResponse(status));
        },
        { drogon::Post }
    );

    LOG_INFO << "Server listening on http://0.0.0.0:8080";
    drogon::app().addListener("0.0.0.0", 8080).run();
}