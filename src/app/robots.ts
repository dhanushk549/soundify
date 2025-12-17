import { userAgent } from "next/server";
import  {MetadataRoute} from "next";

export default function robots(): MetadataRoute.Robots{
    const domain=(process.env.NEXTAUTH_URL ||" ").replace(/\/$/, "");
        return{
        rules:[{
            userAgent:"*",
            allow:"/",
            disallow:["/aapi","/bdashord",],
        },],
        sitemap:[`${domain}/Sitemap.xml`],
        };
}